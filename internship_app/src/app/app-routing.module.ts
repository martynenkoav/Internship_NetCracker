import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyModel} from "./model/companyModel";
import {CompanyComponent} from "./company/company.component";
import {InternshipComponent} from "./internship/internship.component";


const routes: Routes = [
  {path: 'company', component: CompanyComponent },
  {path: 'internship', component: InternshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
