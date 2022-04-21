
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/userModel";
import 'rxjs';
import {map, Observable, throwError} from 'rxjs';
import {RoleModel} from "../model/roleModel";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //private token = null;
  //REGISTER_URL: string = 'http://localhost:8081/api/v1/register';
  REGISTER_URL: string = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) { }

  register(user: UserModel, role: RoleModel): Observable<UserModel>{
        return this.http.post<UserModel>(this.REGISTER_URL, user);
  }
}
