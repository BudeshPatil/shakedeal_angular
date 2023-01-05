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
    const endpoint = 'http://localhost:3000'+'/api/users/adminuserview';
    return this.http.get(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  saveUser = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:3000'+'/api/users/saveuser';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  saveTeam = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:3000'+'/api/team/saveteam';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };
  

  getAllteams = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:3000'+'/api/team//getallteams';
    return this.http.get(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getAllTask = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:3000'+'/api/team//getalltask';
    return this.http.get(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  assignTask = (data:any): Observable<any> => {
    const endpoint = 'http://localhost:3000'+'/api/team/savetask';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };
}
