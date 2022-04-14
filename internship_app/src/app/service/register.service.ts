
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import 'rxjs';
import {map, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //private token = null;
  REGISTER_URL: string = 'http://localhost:8081/api/v1/register';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User>{
        return this.http.post<User>(this.REGISTER_URL, user);
  }
}
