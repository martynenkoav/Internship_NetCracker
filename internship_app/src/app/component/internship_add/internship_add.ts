import {Component, OnInit} from '@angular/core';
import {InternshipModel} from "../../model/internshipModel";
import {InternshipService} from "../../service/internship.service";
import {NULL_AS_ANY} from "@angular/compiler-cli/src/ngtsc/typecheck/src/expression";
import {CompanyModel} from "../../model/companyModel";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../../service/token-storage.service";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-internships-by-comp-id',
  templateUrl: './internship_add.html',
  styleUrls: ['./internship_add.css']
})
export class Internship_add implements OnInit {

  internships!: Array<InternshipModel>;
  internshipsWithoutFilt!: Array<InternshipModel>;

  internship: InternshipModel;

  company: CompanyModel;

  internshipForm!: FormGroup;

  currentUser: any;

  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private formBuilder: FormBuilder, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.internshipForm = this.formBuilder.group({
      name: [''],
      description: [''],
      url: ['']
    })

    this.getCompany();
    this.loadInternships();
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

  loadInternships() {

    this.internshipService.getInternshipsByCompanyId(this.tokenStorageService.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
        this.internshipsWithoutFilt = response;
      },
      error => console.warn(error)
    )
  }

  deleteInternship(curInternship: InternshipModel) {

    this.internshipService.deleteInternship(curInternship.id).subscribe(
      value => {
        console.log('Deleting correctly');
        this.loadInternships();
      },
      error => {
        console.warn(error);
      }
    )
  }

  postInternship() {
    let newInternship = this.extractFormData();

    this.internshipService.postInternship(this.tokenStorageService.getUser().id, newInternship).subscribe(
      value => {
        console.log('Getting correctly');
        this.loadInternships();
      },
      error => console.warn(error)
    )
  }

  filterList(event: any) {
    console.log(event);
    this.internships = this.internshipsWithoutFilt.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  extractFormData(): InternshipModel {

    let internshipData = this.internshipForm.value;

    let newInternship = new InternshipModel();
    newInternship.name = internshipData.name;
    newInternship.description = internshipData.description;
    newInternship.company_id = this.company.id;
    newInternship.url = internshipData.url;
    newInternship.responses = 0;

    console.log(newInternship);

    return newInternship;
  }
}
