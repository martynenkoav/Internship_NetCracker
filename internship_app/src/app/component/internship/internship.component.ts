import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InternshipModel} from "../../model/internshipModel";
import {InternshipService} from "../../service/internship.service";
import {CompanyModel} from "../../model/companyModel";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";

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
  isStudent: boolean;
  currentUser: any;

  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.getInternships();
    this.getAccess();
  }

  getAccess() {
    this.roles = this.tokenStorageService.getUser().roles;
    if (this.roles.includes("ROLE_STUDENT") || this.roles.includes("ROLE_COMPANY")) {
      this.hasAccess = true;
    }
    if (this.roles.includes("ROLE_STUDENT")) {
      this.isStudent = true;
    }
    this.currentUser = this.tokenStorageService.getUser();
  }

  getInternships() {
    this.internshipService.getInternships().subscribe(
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

  goToCompany(id: number) {
    this.router.navigate(['/company-for-check/', id]);
  }

  goToTheLink(internship: InternshipModel) {

    internship.responses++;

    this.internshipService.patchInternship(this.tokenStorageService.getUser().id, internship).subscribe(
      () => console.log('Patching correctly'),
      error => console.warn(error)
    )
    open(internship.url);
  }
}
