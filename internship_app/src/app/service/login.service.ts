import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/userModel";
import {map, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {InternshipModel} from "../model/internshipModel";
import {RoleModel} from "../model/roleModel";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 // LOGIN_URL: string = 'http://localhost:8081/api/v1/login';
  LOGIN_URL: string = 'http://localhost:8081/api/auth/signin';

  private token = null;
  constructor(private http: HttpClient) { }

 /* login(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.LOGIN_URL, user)
     /!* .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));*!/
  }*/
  login(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.LOGIN_URL, user);
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




  register(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(this.LOGIN_URL, user);
  }
}
