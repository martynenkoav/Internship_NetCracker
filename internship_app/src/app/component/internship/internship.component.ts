import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Internship} from "../../model/internship";
import {InternshipService} from "../../service/internship.service";
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {StudentService} from "../../service/student.service";
import 'bootstrap';
import {forkJoin} from "rxjs";


@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  internships!: Internship[];
  internshipsWithoutFilt!: Internship[];
  company: Company;
  roles: string[] = [];
  hasAccess: boolean;
  isStudent: boolean;
  currentUser: any;
  currentStudent: any;

  constructor(private internshipService: InternshipService, private companyService: CompanyService,
              private studentService: StudentService, private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    /*this.getInternships();
    this.getCurrentUser();*/
    this.getAccess();

    forkJoin(
      this.internshipService.getInternships(),
      this.studentService.getStudentById(this.tokenStorageService.getUser().id)
    ).subscribe(([internships, student]) => {
      console.log('Getting correctly');
      this.currentStudent = student;
      this.internships = internships;
      this.internshipsWithoutFilt = internships;
    })
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
