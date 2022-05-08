import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CompanyComponent } from './component/company/company.component';
import { CompanyService } from './service/company.service';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { InternshipComponent } from './component/internship/internship.component';
import { NavComponent } from './component/nav/nav.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import {MatSelectModule} from "@angular/material/select";
import {authInterceptorProviders} from "./interceptor/auth.interceptor";
import { InternshipAdd } from './component/internship-add/internship-add';
import { StudentComponent } from './component/student/student.component';
import { CompanyForCheckComponent } from './component/company-for-check/company-for-check.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    InternshipComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    InternshipAdd,
    StudentComponent,
    CompanyForCheckComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
