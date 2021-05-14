import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from '../model/chart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private http: HttpClient
  private chartEndpoint = 'http://localhost:3000/api/dashboard';

  constructor(http: HttpClient) { 
    this.http = http;
  }

  public getChartData() : Observable<Chart>{
    return this.http.get<Chart>(this.chartEndpoint)
      .pipe(map(chart => {
          return chart;
    }));

  }
}
