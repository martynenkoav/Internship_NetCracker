import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/userModel";
import {LoginService} from "../service/login.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {RoleModel} from "../model/roleModel";
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.user = {
      username: "",
      password: ""
    }
  }
  onSubmit(): void {
    this.authService.login(this.user)
      .subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          if (this.roles.includes('ROLE_COMPANY')) {
            this.router.navigate(["/company"]).then(() => {
              this.reloadPage()})
          } else {
            this.router.navigate(["/register"]).then(() => {
              this.reloadPage()})
          }

        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        });
    /*let resp = this.loginService.login(this.user);
    resp.subscribe(data => {
        this.router.navigate(["/company"]) });*/
  }

  public cleanButtonClicked()
  {
    this.user = new UserModel();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
