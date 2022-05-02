import {Component, OnInit} from '@angular/core';
import {CompanyModel} from "../../model/companyModel";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: CompanyModel;

  constructor(private companyService: CompanyService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompanyByUserId(this.tokenStorageService.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )
  }

  postCompany() {
    this.companyService.postCompany(this.company).subscribe(
      () => console.log('Patching correctly'),
      error => console.warn(error)
    )
  }
}
