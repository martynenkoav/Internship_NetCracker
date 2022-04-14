import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
//import {CompanyForm} from "./model/companyForm";
import {User} from "./model/user";

/*
const headerDict = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const requestOptions = {
  headers: headerDict
};
*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false
  constructor(private http: HttpClient) { }

  userGet(user: User){
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails() {
    // post these details to API server return user info if correct
    return this.http.get('http://localhost:8081/api/v1/user')
    /*return this.http.post('http://localhost:8081/api/v1/user', {
      "username":"admin","password":"abc"}, requestOptions)

    }*/
  }
}
