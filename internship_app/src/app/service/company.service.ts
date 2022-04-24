import {Injectable} from '@angular/core';
import {CompanyModel} from "../model/companyModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
import {CompanyComponent} from "../company/company.component";
import {map, Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {InternshipModel} from "../model/internshipModel";
import {TokenStorageService} from "./token-storage.service";


/*const headerDict = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const requestOptions = {
  headers: headerDict
};*/


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private token: TokenStorageService) {
  }


  COMPANY_URL: string = 'http://localhost:8081/api/v1/company';

  public getCompanyById(id: number) {
    return this.http.get(this.COMPANY_URL + "/" + id)
  }

  public getCompanies(): Observable<CompanyModel[]> {

    return this.http.get<CompanyModel[]>(this.COMPANY_URL).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    );
  }

  public postCompany(id: number, companyForm: CompanyModel) {
    return this.http.post(this.COMPANY_URL + "/" + id, companyForm);
  }

  public patchCompany(companyForm: CompanyModel) {
    return this.http.patch(this.COMPANY_URL, companyForm)
  }

  public deleteCompany() {
    return this.http.delete(this.COMPANY_URL + "/" + 12) //нужно писать индекс
  }
}
