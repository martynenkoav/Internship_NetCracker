import { Injectable } from '@angular/core';
import {CompanyForm} from "./model/companyForm";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
import {CompanyComponent} from "./company/company.component";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyFormService {
  constructor(private http: HttpClient) { }

  companyFormSend(companyForm: CompanyForm){
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };



    return this.http.get('http://localhost:8081/api/v1/company',  requestOptions);
  }
}
