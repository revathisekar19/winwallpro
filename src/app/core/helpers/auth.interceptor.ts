import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../../core/services/token-storage.service';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const API_HEADER_KEY = 'x-api-key'; // for Node.js Express back-end
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    let token = this.token.getToken();
    if (token) {
      authReq = req.clone({
        headers: req.headers
          .set(API_HEADER_KEY, environment.nodeconfig.apiKey)
          .set(TOKEN_HEADER_KEY, token)
      });
    } else {
      authReq = req.clone({
        headers: req.headers.set(API_HEADER_KEY, environment.nodeconfig.apiKey),
      });
    }
    return next.handle(authReq).pipe(
      catchError((error) => {
        let handled: boolean = false;
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
          } else {
            switch (error.status) {
              case 401:
                this.router.navigateByUrl('/auth/login');
                handled = true;
                break;
              case 403:
                this.router.navigateByUrl('/auth/login');
                handled = true;
                break;
            }
          }
        } else {
        }

        if (handled) {
          return of(error);
        } else {
          return throwError(error);
        }
      })
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];