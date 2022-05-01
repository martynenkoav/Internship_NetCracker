import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentModel} from "../model/studentModel";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {
  }

  STUDENT_URL: string = 'http://localhost:8081/api/v1/student';

  public getStudentById(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.STUDENT_URL + "/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public postStudent(studentModel: StudentModel) {
    return this.http.post(this.STUDENT_URL, studentModel);
  }
}

