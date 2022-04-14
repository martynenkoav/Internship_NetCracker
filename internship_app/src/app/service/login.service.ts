import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LOGIN_URL: string = 'http://localhost:8081/api/v1/login';

  private token = null;
  constructor(private http: HttpClient) { }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{ token: string }>(this.LOGIN_URL, user).pipe(
      tap(
        ({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        }
      )
    )
  }
  setToken(token: string){
    this.token = token;
  }
  getToken(): string {
    return this.token
  }
  logout(){
    this.setToken(null)
    localStorage.clear()
  }
  isAuthentificated(){
    return !!this.token
  }




  register(user: User): Observable<User>{
    return this.http.post<User>(this.LOGIN_URL, user);
  }
}
