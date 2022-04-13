import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class InternshipComponent implements OnInit{

  internships!: Array<InternshipModel>;

  constructor(private internshipService: InternshipService) {
  }

  ngOnInit(): void {

    this.internshipService.getInternships().subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
      },
      error => console.warn(error)
    )
  }
}
