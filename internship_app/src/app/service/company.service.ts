import {Injectable} from '@angular/core';
import {Company} from "../model/company";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
import {map, Observable, throwError} from 'rxjs';
import {TokenStorageService} from "./token-storage.service";
import {Const} from "../const/const";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {
  }

  private COMPANY_URL: string = Const.LOCALHOST_URL + 'api/company';

  public getCompanies(): Observable<any> {
    return this.http.get<any>(this.COMPANY_URL);
  }

  public getCompanyByUserId(id: number): Observable<any> {
    return this.http.get<any>(this.COMPANY_URL + "/" + id);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(this.COMPANY_URL + "/company/" + id);
  }

  public postCompany(id: number, company: FormGroup) {
    return this.http.post(this.COMPANY_URL + '/' + id, company);
  }
}
