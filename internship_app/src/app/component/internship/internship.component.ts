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
import {FormControl} from "@angular/forms";

export interface Tag {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})

export class InternshipComponent implements OnInit {

  viewInternships: Internship[] = [];
  tags: Tag[] = [
    {
      value: '', viewValue: 'Все'
    },
    {
      value: 'AUTOMOTIVE_BUSINESS', viewValue: 'Автомобильный бизнес'
    },
    {
      value: 'ADMINISTRATIVE_STAFF', viewValue: 'Административный персонал'
    },
    {
      value: 'SAFETY', viewValue: 'Безопасность'
    },
    {
      value: 'TOP_MANAGEMENT', viewValue: 'Высший менеджмент'
    },
    {
      value: 'PURCHASES', viewValue: 'Закупки'
    },
    {
      value: 'INFORMATION_TECHNOLOGY', viewValue: 'Информационные технологии'
    },
    {
      value: 'ART', viewValue: 'Искусство'
    },
    {
      value: 'ADVERTISING', viewValue: 'Реклама'
    },
    {
      value: 'MEDICINE', viewValue: 'Медицина'
    },
    {
      value: 'SALES', viewValue: 'Продажи'
    },
    {
      value: 'TOURISM', viewValue: 'Туризм'
    },
    {
      value: 'PERSONNEL_MANAGEMENT', viewValue: 'Управление персоналом'
    },
    {
      value: 'LAWYERS', viewValue: 'Юристы'
    },
    {
      value: 'OTHER', viewValue: 'Другое'
    }
  ];
  /*TAGS;*/
  internships: Internship[] = [];
  myInternships: Internship[] = [];
  company: Company;
  roles: string[] = [];
  hasAccess: boolean = false;
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
    this.getAccess();

    if (this.roles.includes("ROLE_STUDENT")) {
      forkJoin(
        this.internshipService.getInternships(),
        this.internshipService.getInternshipsByStudentId(this.tokenStorageService.getUser().id)
      ).subscribe(([internships, myInternships]) => {
        this.internships = internships;
        this.internships.forEach(internship => this.companyService.getCompanyById(internship.company_id).subscribe(
          (response) => {
            console.log('Getting correctly');
            internship.company = response;
          },
          error => console.warn(error)
        ));
        this.myInternships = myInternships;
        this.myInternships.forEach(myInternship => this.companyService.getCompanyById(myInternship.company_id).subscribe(
          (response) => {
            console.log('Getting correctly');
            myInternship.company = response;
          },
          error => console.warn(error)
        ));
        this.viewInternships = internships;
        console.log('view inter', this.viewInternships);
        this.getCurrentUser();
      })
    } else {
      this.getInternships();
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
          this.currentStudent = response;
          console.log('Getting student correctly', this.currentStudent);
        },
        error => console.warn(error));
    }
  }

  getInternships() {
    this.internshipService.getInternships().subscribe(
      (response) => {
        console.log('Getting correctly');
        this.internships = response;
        this.internships.forEach(internship => this.companyService.getCompanyById(internship.company_id).subscribe(
          (response) => {
            console.log('Getting correctly');
            internship.company = response;
          },
          error => console.warn(error)
        ));
        console.log(this.internships);
        this.viewInternships = response;
      },
      error => console.warn(error));
  }

  filterList(event: any, filterName: string) {
    console.log('Проверка фильтра', event.target);
    this.filters.set(filterName, event.target.value.toLowerCase());
    this.viewInternships = this.internships;
    this.filters.forEach((value, key) => {
      if (value !== "") {
        this.viewInternships = this.viewInternships.filter(x => x[key].toLowerCase().includes(value));
      }
    })
  }

  /*filterTag(event: any, filterName: string) {
    console.log(event.value.toString());
    this.filters.set(filterName, event.value.toString());
    this.viewInternships = this.internships;
    console.log(this.filters);
    this.filters.forEach((value, key) => {
      if (value !== "") {
        this.viewInternships = this.viewInternships.filter(x => {
          console.log(x);

          return x.tags.includes(value);
        });
      }
    })
  }*/

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
        this.myInternships = response;
        this.myInternships.forEach(internship => this.companyService.getCompanyById(internship.company_id).subscribe(
          (response) => {
            console.log('Getting correctly');
            internship.company = response;
          },
          error => console.warn(error)
        ));
        this.viewInternships = this.myInternships;

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
    studentInternships.forEach(internship => this.studentTags.push(internship?.tags));

    let studentInternshipsIds = studentInternships.map(studentInternship => studentInternship.id);

    let result = allInternships.filter(internship => {
      return !studentInternshipsIds.includes(internship.id)
    });

    this.viewInternships = result.filter(x => {
      return this.studentTags.some(st => {
          return st === x.tags;
        }
      )
    });
  }

}

