import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentModel} from "../model/studentModel";
import {map, Observable} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  STUDENT_URL: string = 'http://localhost:8081/api/student';

  public getStudentById(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.STUDENT_URL + "/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public postStudent(student: StudentModel) {
    return this.http.post(this.STUDENT_URL, student);
  }

  public updateStudent(studentModel: StudentModel){
    return this.http.patch(this.STUDENT_URL + '/'+ this.tokenStorageService.getUser().id, studentModel);
  }
}

