import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LabourCosts } from '../model/labourCosts.interfaces';

export const baseUrl = 'application/labourstats';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = environment['API'];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getLabourCosts(): Observable<LabourCosts[]> {
    return this.httpClient.get(`${this.api}${baseUrl}`).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
