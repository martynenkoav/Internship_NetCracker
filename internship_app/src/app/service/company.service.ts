import {Injectable} from '@angular/core';
import {CompanyModel} from "../model/companyModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
import {map, Observable, throwError} from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {
  }

  private COMPANY_URL: string = 'http://localhost:8081/api/company';

  public getCompanyByUserId(id: number): Observable<CompanyModel> {
    return this.http.get<CompanyModel>(this.COMPANY_URL + "/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  getCompanyById(id: number): Observable<CompanyModel> {
    return this.http.get<CompanyModel>(this.COMPANY_URL + "/company_id/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public postCompany(company: CompanyModel) {
    return this.http.post(this.COMPANY_URL, company);
  }
}
