import {Component, OnInit} from '@angular/core';
import {InternshipModel} from "../model/internshipModel";
import {InternshipService} from "../service/internship.service";
import {NULL_AS_ANY} from "@angular/compiler-cli/src/ngtsc/typecheck/src/expression";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompanyModel} from "../model/companyModel";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  internshipForm: InternshipModel;

  internships!: Array<InternshipModel>;

  constructor(private internshipFormService: InternshipService) {
  }

  ngOnInit(): void {
    this.internshipFormService.getInternships().subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
      },
      error => console.warn(error)
    )
  }
}
