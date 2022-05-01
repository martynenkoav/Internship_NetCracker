import {Component, OnInit} from '@angular/core';
import {CompanyModel} from "../../model/companyModel";
import {CompanyService} from "../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";
import {InternshipModel} from "../../model/internshipModel";
import {identifierOfNode} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";
import {root} from "rxjs/internal-compatibility";
import {initializeStaticContext} from "@angular/core/src/render3/styling/class_and_style_bindings";

@Component({
  selector: 'app-company-for-check',
  templateUrl: './company-for-check.component.html',
  styleUrls: ['./company-for-check.component.css']
})
export class CompanyForCheckComponent implements OnInit {

  public company: CompanyModel;

  companyId: number;

  constructor(private companyService: CompanyService, private router: Router, private token: TokenStorageService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.companyId = params['id'];
    });

    this.getCompany();

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
}
