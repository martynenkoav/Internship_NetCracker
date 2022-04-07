import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyForm} from "../model/companyForm";
import {HttpClient} from "@angular/common/http";
import {CompanyFormService} from "../company-form.service";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companyForm: CompanyForm;
 // registrationForm: FormGroup;

  constructor(private companyFormService: CompanyFormService) {}

  ngOnInit(): void {
    this.companyForm = {
      name: "",
      description: ""
    }
  }
  onSubmit(){

    this.companyFormService.companyFormSend(this.companyForm).subscribe(
      ()=> console.log('Added correctly'),
      error => console.warn(error)
    )
  }

/*  public onSubmitted()
  {
    console.log(companyFrom.name);
  }*/


  public cleanButtonClicked()
    {
      this.companyForm = new CompanyForm();
    }


    /*this.registrationForm = new FormGroup({
      name: new FormControl('klk'),
      description: new FormControl('fkljl')
    })*/

}
