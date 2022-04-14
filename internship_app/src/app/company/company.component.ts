import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyModel} from "../model/companyModel";
import {HttpClient} from "@angular/common/http";
import {CompanyService} from "../service/company.service";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companyForm: CompanyModel;

  constructor(private companyFormService: CompanyService) {
  }

  ngOnInit(): void {
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
