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
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Validation from "./validation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    roleId: new FormControl(''),
  });

  public roles: string[];
  public user: UserModel;
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.user = {
      username: "",
      password: "",
      roleId: 0
    }
    this.submitted = true;
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        roleId: [0]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.user.id = 0;
    this.user.username = String(this.form.value.username);
    this.user.password = String(this.form.value.password);
    this.user.roleId = Number(this.form.value.roleId);
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
