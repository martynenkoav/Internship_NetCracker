import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentModel} from "../model/studentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {
  }

  STUDENT_URL: string = 'http://localhost:8081/api/v1/student';

  public getStudentById(id: number) {
    return this.http.get(this.STUDENT_URL + "/" + id)
  }

  public getStudents() {
    return this.http.get(this.STUDENT_URL);
  }

  public postStudent(studentModel: StudentModel) {
    return this.http.post(this.STUDENT_URL, studentModel);
  }

  public patchStudent(studentModel: StudentModel) {
    return this.http.patch(this.STUDENT_URL, studentModel)
  }

  public deleteStudent() {
    return this.http.delete(this.STUDENT_URL)
  }
}

