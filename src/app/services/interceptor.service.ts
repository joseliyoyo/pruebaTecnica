import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(this.handleError)
    );
  }


  /**
   * Manejamos el error mostrandolo por consola
   * @param error
   */
  handleError(error: HttpErrorResponse){
    console.warn('Ocurrió un error', error);
    return throwError( () => error );
  }

}
