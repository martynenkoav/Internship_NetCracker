import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyModel} from "./model/companyModel";
import {CompanyComponent} from "./company/company.component";
import {UserComponent} from "./user/user.component";
//import {LoginComponent} from "./user/login.component";
import {InternshipComponent} from "./internship/internship.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: 'company', component: CompanyComponent },
  {path: 'user', component: UserComponent},
  {path: 'internship', component: InternshipComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
