import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  public authService: AuthenticationService;
  public router: Router

  constructor(authService:AuthenticationService,router: Router) {
    this.authService = authService;
    this.router = router;
   }

   canActivate(): boolean {
    const currentUser = this.authService.currentUserValue;
    if (!this.isEmpty(currentUser)) {
      //console.log('not empty');
        return true; 
    }
    //console.log('empty');
    this.router.navigate(['']);
    return false;
  }

  isEmpty(obj: any) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

}
