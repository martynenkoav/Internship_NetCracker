import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {InternshipComponent} from "./internship/internship.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {Internship_add} from "./internship_add/internship_add";
import {StudentComponent} from "./student/student.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: InternshipComponent},
  {path: 'company', component: CompanyComponent },
  {path: 'internship', component: InternshipComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'by_internship_id', component: Internship_add},
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
