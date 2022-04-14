import { Component, OnInit } from '@angular/core';
//import {CompanyForm} from "../model/companyForm";
//import {CompanyFormService} from "../company-form.service";
import {User} from "../model/user";
import {AuthService} from "../auth.service";
import {Route} from "@angular/router";
import {InternshipService} from "../service/internship.service";
import {CompanyService} from "../service/company.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.user = {
      id: 10,
      username: "",
      password: "",
      role_id: 1
    }
  }

  loginUser() {
   /* event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value*/
   /* this.authService.getUserDetails(this.user.username, this.user.password).subscribe(
      ()=> console.log(this.user.username),
      error => console.warn(error)
    )*/
    /*this.companyService.postCompany({"companyName": "nn", "description": "kk"}).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    )*/
    /*this.companyService.getCompanies().subscribe(
      () => console.log('Getting correctly')
    )*/
  }
  public cleanButtonClicked()
  {
    this.user = new User();
  }

}
