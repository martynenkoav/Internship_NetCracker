import {Injectable} from '@angular/core';
import {CompanyModel} from "../model/companyModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs';
import {CompanyComponent} from "../company/company.component";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {
  }

  COMPANY_URL: string = 'http://localhost:8081/api/v1/company';

  public getCompanyById(id: number) {
    return this.http.get(this.COMPANY_URL + "/" + id)
  }

  public getCompanies() {
    return this.http.get(this.COMPANY_URL);
  }

  public postCompany(companyForm: CompanyModel) {
    return this.http.post(this.COMPANY_URL, companyForm);
  }

  public patchInternship(companyForm: CompanyModel) {
    return this.http.patch(this.COMPANY_URL, companyForm)
  }

  public deleteInternship() {
    return this.http.delete(this.COMPANY_URL)
  }
}
