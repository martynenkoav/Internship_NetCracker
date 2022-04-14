import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {RegisterService} from "../service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.user = {
      id: 10,
      username: "",
      password: "",
      role_id: 2
    }
  }
  onSubmit(): void {
      this.registerService.register(this.user).subscribe(
        () => console.log('Getting correctly'),
        error => console.warn(error)
      );
  }

  public cleanButtonClicked()
  {
    this.user = new User();
  }

}
