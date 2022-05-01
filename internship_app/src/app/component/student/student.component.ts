import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {StudentModel} from "../../model/studentModel";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student: StudentModel;

  constructor(private studentService: StudentService, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudentById(this.token.getUser().id).subscribe(
      (response) => {
        console.log('Getting correctly');
        this.student = response;
      },
      error => console.warn(error)
    )
  }

  postStudent() {
    this.studentService.postStudent(this.student).subscribe(
      () => console.log('Getting correctly'),
      error => console.warn(error)
    )
  }
}
