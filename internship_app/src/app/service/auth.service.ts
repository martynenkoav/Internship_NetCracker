import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserModel} from "../model/userModel";
import {FormControl} from "@angular/forms";
const AUTH_API = 'http://localhost:8080/api/auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(user: UserModel): Observable<any> {
    return this.http.post('http://localhost:8081/api/auth/signin', user, httpOptions);
  }
  register(user: UserModel): Observable<any> {
    return this.http.post('http://localhost:8081/api/auth', user, httpOptions);
  }
}
