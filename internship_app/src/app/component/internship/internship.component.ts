import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Internship} from "../../model/internship";
import {InternshipService} from "../../service/internship.service";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {StudentService} from "../../service/student.service";
import 'bootstrap';
import {catchError, forkJoin, isEmpty, never, throwError} from "rxjs";
import {HttpHandler, HttpRequest} from "@angular/common/http";


@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})

export class InternshipComponent implements OnInit {

  viewInternships: Internship[] = [];
  internships: Internship[] = [];
  myInternships: Internship[] = [];
  company: Company;
  roles: string[] = [];
  hasAccess: boolean;
  isStudent: boolean;
  currentUser: any;
  currentStudent: any;
  studentTags: any[] = [];
  filters: Map<string, string> = new Map<string, string>();

  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private studentService: StudentService, private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.filters.set("name", "");
    this.filters.set("tag", "");

    if (this.roles.includes("ROLE_STUDENT")) {
      forkJoin(
        this.internshipService.getInternships(),
        this.internshipService.getInternshipsByStudentId(this.tokenStorageService.getUser().id)
      ).subscribe(([internships, myInternships]) => {
        this.internships = internships;
        this.myInternships = myInternships;
        this.viewInternships = internships;
        this.getAccess();
        this.getCurrentUser();
      })
    } else {
      this.getInternships();
      this.getAccess();
    }

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

  getCurrentUser() {
    if (this.roles.includes("ROLE_STUDENT")) {
      this.currentStudent = this.studentService.getStudentById(this.tokenStorageService.getUser().id).subscribe(
        (response) => {
          console.log('Getting correctly');
          this.currentStudent = response;
        },
        error => console.warn(error));
    }
  }

  getInternships() {
    this.internshipService.getInternships().subscribe(
      (response) => {
        console.log('Getting correctly');
        this.viewInternships = response;
        this.internships = response;
      },
      error => console.warn(error));
  }

  filterList(event: any, filterName: string) {
    this.filters.set(filterName, event.target.value.toLowerCase());
    this.viewInternships = this.internships;
    this.filters.forEach((value, key) => {
      if (value !== "") {
        this.viewInternships = this.viewInternships.filter(x => x[key].toLowerCase().includes(value));
      }
    })
  }

  goToCompany(id: number) {
    this.router.navigate(['/company-for-check/', id]);
  }

  goToTheLink(internship: Internship) {

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

  showStudentsInternships() {
    this.internshipService.getInternshipsByStudentId(this.tokenStorageService.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.viewInternships = response;
        this.myInternships = response;
      },
      error => console.warn(error)
    );
  }

  isInStudentsList(id: number):
    boolean {
    if (this.currentStudent == null) {
      return false;
    } else {
      return this.currentStudent.internships.includes(id);
    }
  }

  getRecommendationInternships() {

    let allInternships = this.internships;

    let studentInternships = this.myInternships;
    studentInternships.forEach(internship => this.studentTags.push(internship?.tag));

    let studentInternshipsIds = studentInternships.map(studentInternship => studentInternship.id);

    let result = allInternships.filter(internship => {
      return !studentInternshipsIds.includes(internship.id)
    });

    this.viewInternships = result.filter(x => {
      return this.studentTags.some(st => {
          return st === x.tag;
        }
      )
    });
  }
}

