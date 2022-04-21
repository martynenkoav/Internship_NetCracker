import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './service/company.service';
import { CompanyModel } from "./model/companyModel";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InternshipComponent } from './internship/internship.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./service/register.service";
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from "@angular/material/select";
import {authInterceptorProviders} from "./auth.interceptor";
import { ProfileComponent } from './profile/profile.component';
//import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    UserComponent,
    InternshipComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
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
