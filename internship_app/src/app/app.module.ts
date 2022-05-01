import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './service/company.service';
import {HttpClientModule} from "@angular/common/http";
import { InternshipComponent } from './internship/internship.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./service/register.service";
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from "@angular/material/select";
import {authInterceptorProviders} from "./auth.interceptor";
import { Internship_add } from './internship_add/internship_add';
import { StudentComponent } from './student/student.component';




@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    InternshipComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    Internship_add,
    StudentComponent
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
    CompanyService,
    RegisterService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
