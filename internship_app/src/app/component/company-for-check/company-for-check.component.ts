import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";
import {Internship} from "../../model/internship";
import {InternshipService} from "../../service/internship.service";

@Component({
  selector: 'app-company-for-check',
  templateUrl: './company-for-check.component.html',
  styleUrls: ['./company-for-check.component.css']
})
export class CompanyForCheckComponent implements OnInit {

  internships: Internship[];
  internshipsWithoutFilt: Internship[];
  public company: Company;

  companyId: number;

  constructor(private companyService: CompanyService, private tokenStorageService: TokenStorageService,
              private activatedRoute: ActivatedRoute, private internshipService: InternshipService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.companyId = params['id'];
    });

    this.getCompany();
    this.loadInternships();
  }

  getCompany() {
    this.companyService.getCompanyById(this.companyId).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )
  }

  loadInternships() {

    this.internshipService.getInternshipsByCompanyId(this.companyId).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
        this.internshipsWithoutFilt = response;
      },
      error => console.warn(error)
    )
  }

  filterList(event: any) {
    console.log(event);
    this.internships = this.internshipsWithoutFilt.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }
}
