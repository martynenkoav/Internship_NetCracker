import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InternshipModel} from "../model/internshipModel";
import {InternshipService} from "../service/internship.service";
import {NULL_AS_ANY} from "@angular/compiler-cli/src/ngtsc/typecheck/src/expression";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompanyModel} from "../model/companyModel";
import {CompanyService} from "../service/company.service";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  internships!: Array<InternshipModel>;
  internshipsWithoutFilt!: Array<InternshipModel>;
  company: CompanyModel;
  roles: string[] = [];
  hasAccess: boolean;

  currentUser: any;


  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.internshipService.getInternships().subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
        this.internshipsWithoutFilt = response;
      },
      error => console.warn(error)
    )
    this.roles = this.tokenStorage.getUser().roles;
    if (this.roles.includes("ROLE_STUDENT")) {
      this.hasAccess = true;
    }
    this.currentUser = this.tokenStorage.getUser();
  }

  getCompanyById() {
    this.companyService.getCompanyById(this.tokenStorage.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )
  }

  filterList(event: any) {
    console.log(event);
    this.internships = this.internshipsWithoutFilt.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }
}
