import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyModel} from "../model/companyModel";
import {HttpClient} from "@angular/common/http";
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

  /*currentId: number;
  public companyForm: CompanyModel;
  roles: string[] = [];
*/
  constructor(private companyService: CompanyService, private router: Router, private token: TokenStorageService) {
  }


  ngOnInit(): void {
    this.getCompany();
    /*if (!this.roles.includes('ROLE_COMPANY')) {
      this.router.navigate(["/register"])
        .then(r => console.log('You do not have the permission'));
    }
    this.currentId = this.token.getUser().id;*/


    /*this.company.id = this.token.getUser().id;
    this.company.name = '';
    this.company.description = '';*/
  }

  getCompany() {
    this.companyService.getCompanyById(this.token.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )
  }

 /* postCompany() {
    this.companyService.postCompany(this.company).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    )
  }*/
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
