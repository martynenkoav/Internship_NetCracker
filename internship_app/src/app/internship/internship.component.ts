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
              private token: TokenStorageService) {
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
    this.roles = this.token.getUser().roles;
    if (this.roles.includes("ROLE_STUDENT")) {
      this.hasAccess = true;
    }
    this.currentUser = this.token.getUser();
  }

  filterList(event: any) {
    console.log(event);
    this.internships = this.internshipsWithoutFilt.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  goToTheLink(internship: InternshipModel) {

    internship.responses = internship.responses + 1;

    this.internshipService.patchInternship(internship.id, internship).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    )
    open(internship.url);
  }

  goToCompany(companyId: number) {

    /*this.companyService.getCompanyById(companyId).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.company = response;
      },
      error => console.warn(error)
    )*/

  }
}
