import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentModel} from "../model/studentModel";
import {map, Observable} from "rxjs";
import {readSpanComment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {
  }

  STUDENT_URL: string = 'http://localhost:8081/api/v1/student';

  public getStudentById(id: number):Observable<StudentModel> {
    return this.http.get<StudentModel>(this.STUDENT_URL + "/" + id).pipe(
      map((resp)=>{
        console.log(resp);
        return resp;
      })
    )
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

