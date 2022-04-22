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
  currentId: number;
  public companyForm: CompanyModel;
  roles: string[] = [];

  constructor(private companyFormService: CompanyService, private router: Router, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    if (!this.roles.includes('ROLE_COMPANY')) {
      this.router.navigate(["/register"])
        .then(r => console.log('You do not have the permission'));
    }
    this.currentId = this.token.getUser().id;
    this.companyForm = {
      name: "",
      description: ""
    }
  }

  onSubmit() {
      this.companyFormService.postCompany(this.companyForm).subscribe(
        () => console.log('Getting correctly'),
        error => console.warn(error)
      )
  }

  public cleanButtonClicked() {
    this.companyForm = new CompanyModel();
  }
}
