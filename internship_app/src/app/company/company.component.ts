import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyModel} from "../model/companyModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CompanyService} from "../service/company.service";
import {TokenStorageService} from "../service/token-storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: CompanyModel;

  constructor(private companyService: CompanyService, private router: Router, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompanyByUserId(this.token.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )
  }

  postCompany() {
    this.companyService.postCompany(this.token.getUser().id, this.company).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    )
  }

  public cleanButtonClicked() {
    this.company = new CompanyModel();
  }
}
