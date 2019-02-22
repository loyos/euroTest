import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EuroserviceService {

  url: string;

  constructor(private http: HttpClient) { }

  getTest() { // testing service
    return of(
      {
        totalElements: 332,
        totalPages: 67,
        content: [
          { id: 1, name: 'Hydrogen' },
          { id: 2, name: 'Helium' },
          { id: 3, name: 'Lithium' },
          { id: 4, name: 'Beryllium' },
          { id: 5, name: 'Boron' },
          { id: 6, name: 'Carbon' },
          { id: 7, name: 'Nitrogen' },
          { id: 8, name: 'Oxygen' },
          { id: 9, name: 'Fluorine' },
          { id: 10, name: 'Neon' },
        ]
      });
  }

  getCities(a: number, b: number) {
    this.url = `http://sandbox-1.westeurope.cloudapp.azure.com:8081/api/cities/queryByPage?page=${a}&size=${b}`;

    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
    // return this.getTest(); //dev purposes
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      return of(result as T);
    };
  }
}
