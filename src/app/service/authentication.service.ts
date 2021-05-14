import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private loginEndpoint: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {
    this.http = http;
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('token') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  login(username: string, password: string) {
    return this.http.post<any>(this.loginEndpoint, { username, password })
      .pipe(map(user => {
        // store user details and token in session storage to keep user logged in between page refreshes
        sessionStorage.setItem('token', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from session storage and set current user to null
    sessionStorage.remove();
    this.currentUserSubject.next(null!);
  }
}
