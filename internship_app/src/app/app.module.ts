import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CompanyComponent } from './company/company.component';
import { CompanyFormService } from './company-form.service';
import { CompanyForm } from "./model/companyForm";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [
    CompanyFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
