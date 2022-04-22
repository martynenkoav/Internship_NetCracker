/*
import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/userModel";
import {RoleModel} from "../model/roleModel";
import {RegisterService} from "../service/register.service";
import {MatSelectModule} from "@angular/material/select";
import {DialogRole} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  form: UserModel = {
    username: null,
    password: null,
    role_id: 0
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    /!*this.role = {
      id: 0,
      name: ""
    }*!/
  }

  onSubmit(): void {
    /!*if (this.user.role_id == 2){
      this.role.id = 2;
      this.role.name = "ROLE_STUDENT"
    } else {
      this.role.id = 3;
      this.role.name = "ROLE_COMPANY"
    }*!/
      this.authService.register(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(["/login"])
        },
         err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        });
  }

  public cleanButtonClicked()
  {
    this.submitted = false;
    this.form = new UserModel();

  }

}

*/
import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/userModel";
import {RoleModel} from "../model/roleModel";
import {RegisterService} from "../service/register.service";
import {MatSelectModule} from "@angular/material/select";
import {DialogRole} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  public user: UserModel;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.user = {
      id: 10,
      username: "",
      password: "",
      role_id: 0
    }
    /*this.role = {
      id: 0,
      name: ""
    }*/
  }

  onSubmit(): void {
    /*if (this.user.role_id == 2){
      this.role.id = 2;
      this.role.name = "ROLE_STUDENT"
    } else {
      this.role.id = 3;
      this.role.name = "ROLE_COMPANY"
    }*/
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/login"])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      });
  }

  public cleanButtonClicked()
  {
    this.user = new UserModel();
  }

}
