/*
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {formModel} from "../model/formModel";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) {
  }

  FORM_URL: string = 'http://localhost:8081/api/v1/form';

  getFormById(id: number) {
    return this.http.get(this.FORM_URL + "/" + id)
  }

  public getInternships() {
    return this.http.get(this.FORM_URL);
  }

  public postForm(formModel: FormModel) {
    return this.http.post(this.FORM_URL, formModel);
  }

  public patchForm(formModel: FormModel) {
    return this.http.patch(this.FORM_URL, formModel)
  }

  public deleteForm() {
    return this.http.delete(this.FORM_URL)
  }

}
*/
