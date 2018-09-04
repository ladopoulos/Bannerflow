import {Injectable} from '@angular/core';
import {HttpClient,HttpParams,HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { IBanner} from '../model/banner';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()  
export class BannerService {

  constructor(private http: HttpClient) { }

  getAllBanners(url: string): Observable<IBanner[]> {
    return this.http.get<IBanner[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  addBanner(url: string, banner: IBanner): Observable<any> {
    return this.http.post(url, JSON.stringify(banner), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBanner(url: string, id: string, banner: IBanner): Observable<any> {
    const newurl = `${url}`;
    return this.http.put(newurl, banner, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBanner(url: string, id: string): Observable<any> {
    const newurl = `${url}/${id}`; // DELETE api/banner?id=42
    return this.http.delete(newurl, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
