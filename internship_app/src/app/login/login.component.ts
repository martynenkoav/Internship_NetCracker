import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {LoginService} from "../service/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = {
      username: "",
      password: "",
    }
  }
  onSubmit(): void {
    this.loginService.login(this.user).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    );
  }

  public cleanButtonClicked()
  {
    this.user = new User();
  }

}
