import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from "../model/userModel";
import {FormControl, FormGroup} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  AUTH_URL: string = 'http://localhost:8081/api/auth';

  login(user: UserModel): Observable<any> {
    return this.http.post(this.AUTH_URL + '/signin', user, httpOptions);
  }

  register(user: FormGroup): Observable<any> {
    return this.http.post(this.AUTH_URL, user, httpOptions);
  }
}
