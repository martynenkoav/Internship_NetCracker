import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyModel} from "./model/companyModel";
import {CompanyComponent} from "./company/company.component";
import {UserComponent} from "./user/user.component";
//import {LoginComponent} from "./user/login.component";
import {InternshipComponent} from "./internship/internship.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {Internship_add} from "./internship_add/internship_add";
import {StudentComponent} from "./student/student.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: InternshipComponent},
  {path: 'company', component: CompanyComponent },
  {path: 'user', component: UserComponent},
  {path: 'internship', component: InternshipComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'by_internship_id', component: Internship_add},
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
