import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InternshipModel} from "../../model/internshipModel";
import {InternshipService} from "../../service/internship.service";
import {CompanyModel} from "../../model/companyModel";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  internships!: InternshipModel[];
  internshipsWithoutFilt!: InternshipModel[];
  company: CompanyModel;
  roles: string[] = [];
  hasAccess: boolean;
  isStudent: boolean;
  fromStudentList: boolean;
  currentUser: any;
  currentStudent: any;

  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private studentService: StudentService, private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.getInternships();
    this.getAccess();
    this.getCurrentUser();
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

  getCurrentUser(){
    this.currentStudent = this.studentService.getStudentById(this.tokenStorageService.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.currentStudent = response;
      },
      error => console.warn(error));
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

  addInternshipToStudent(id: number) {
    this.currentStudent.internships.push(id);
    this.studentService.updateStudent(this.currentStudent).subscribe(
      () => console.log('Updated correctly'),
      error => console.warn(error)
    );
  }

  showStudentsInternships(){
    this.internshipService.getInternshipsByStudentId(this.tokenStorageService.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
        this.internshipsWithoutFilt = response;
      },
      error => console.warn(error)
    )
  }

  isInStudentsList(id: number): boolean {
    if (this.currentStudent == null) {
      return false;
    } else {
      console.log(this.currentStudent.internships.includes(id));
      return this.currentStudent.internships.includes(id);
    }
  }
}
