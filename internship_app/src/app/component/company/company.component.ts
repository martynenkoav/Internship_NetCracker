import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company: Company;
  public isEmpty: boolean = false;

  constructor(private companyService: CompanyService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getCompany();
    if (this.company.name == null || this.company.email == null || this.company.description == null) {
      this.isEmpty = true;
    }
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
    window.location.reload();
  }
}
