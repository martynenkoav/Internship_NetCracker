import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";
import {Internship} from "../../model/internship";
import {InternshipService} from "../../service/internship.service";

enum TAGS {
  ALL = "Все",
  AUTOMOTIVE_BUSINESS = "Автомобильный бизнес",
  ADMINISTRATIVE_STAFF = "Административный персонал",
  SAFETY = "Безопасность",
  TOP_MANAGEMENT = "Высший менеджмент",
  PURCHASES = "Закупки",
  INFORMATION_TECHNOLOGY = "Информационные технологии",
  ART = "Искусство",
  ADVERTISING = "Реклама",
  MEDICINE = "Медицина",
  SALES = "Продажи",
  TOURISM = "Туризм",
  PERSONNEL_MANAGEMENT = "Управление персоналом",
  LAWYERS = "Юристы",
  OTHER = "Другое"
}

@Component({
  selector: 'app-company-for-check',
  templateUrl: './company-for-check.component.html',
  styleUrls: ['./company-for-check.component.css']
})


export class CompanyForCheckComponent implements OnInit {

  public internships: Internship[];
  public viewInternships: Internship[];
  public company: Company;
  private companyId: number;
  private filters: Map<string, string> = new Map<string, string>();

  constructor(private companyService: CompanyService, private tokenStorageService: TokenStorageService,
              private activatedRoute: ActivatedRoute, private internshipService: InternshipService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.companyId = params['id'];
    });

    this.filters.set("name", "");
    this.filters.set("tag", "");

    this.getCompany();
    this.loadInternships();
  }

  getCompany() {
    this.companyService.getCompanyById(this.companyId).subscribe(
      (company) => {
        console.log('Getting correctly');
        this.company = company;
      },
      error => console.warn(error)
    )
  }

  loadInternships() {
    this.internshipService.getInternshipsByCompanyId(this.companyId).subscribe(
      (internships) => {
        console.log('Getting correctly');
        this.internships = internships;
        this.viewInternships = internships;
        this.internships.forEach(internship => {
          internship.tags = internship.tags.map(tag => TAGS[tag]);
        });
      },
      error => console.warn(error)
    )
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
}
