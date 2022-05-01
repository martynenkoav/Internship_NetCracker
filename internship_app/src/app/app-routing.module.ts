import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./component/company/company.component";
import {InternshipComponent} from "./component/internship/internship.component";
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {Internship_add} from "./component/internship_add/internship_add";
import {StudentComponent} from "./component/student/student.component";
import {CompanyForCheckComponent} from "./component/company-for-check/company-for-check.component";

const routes: Routes = [
  {path: '', component: InternshipComponent},
  {path: 'company', component: CompanyComponent },
  {path: 'internship', component: InternshipComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'by_internship_id', component: Internship_add},
  {path: 'student', component: StudentComponent},
  {path: 'company-for-check/:id', component: CompanyForCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
