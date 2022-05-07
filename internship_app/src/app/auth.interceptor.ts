import {HTTP_INTERCEPTORS, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {TokenStorageService} from "./service/token-storage.service";
import {Router} from "@angular/router";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    return next.handle(authReq).pipe(catchError((err: any) => {
      if (err.status !== 403 && err.status !== 404) {
        this.router.navigate(["/error"])
        console.log("error");
      }
      if (err.status !== 404) {
        console.log("404");
      }
      return throwError(err);
    }));
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
