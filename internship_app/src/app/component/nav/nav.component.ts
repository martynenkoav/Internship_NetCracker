import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,  private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  goToProfile(){
    if (this.roles.includes('ROLE_COMPANY')) {
      this.router.navigate(["/company"]).then(() => {
        this.reloadPage()
      })
    } else {
      this.router.navigate(["/student"]).then(() => {
        this.reloadPage()
      })
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
