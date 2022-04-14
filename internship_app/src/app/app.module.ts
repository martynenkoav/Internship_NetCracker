import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './service/company.service';
import { CompanyModel } from "./model/companyModel";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './user/login.component';
import { UserComponent } from './user/user.component';
import { InternshipComponent } from './internship/internship.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./service/register.service";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    UserComponent,
    InternshipComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
    CompanyService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
