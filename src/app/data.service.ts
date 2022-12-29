import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAlluser = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:5000'+'/getusers';
    return this.http.get(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getAllteams = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:5000'+'/getteams';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  assignTask = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:5000'+'/assigntask';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };
}
