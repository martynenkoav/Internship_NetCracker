import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InternshipModel} from "../model/internshipModel";
import {map, Observable} from "rxjs";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  constructor(private http: HttpClient) {
  }

  INTERNSHIP_URL: string = 'http://localhost:8081/api/internship';

  public getInternshipsByCompanyId(id: number): Observable<InternshipModel[]> {
    return this.http.get<InternshipModel[]>(this.INTERNSHIP_URL + "/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public getInternshipsByStudentId(id: number): Observable<InternshipModel[]> {
    return this.http.get<InternshipModel[]>(this.INTERNSHIP_URL + "/student/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public getInternships(): Observable<InternshipModel[]> {
    return this.http.get<InternshipModel[]>(this.INTERNSHIP_URL).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    );
  }

  public postInternship(id: number, internship: InternshipModel) {
    return this.http.post(this.INTERNSHIP_URL + "/" + id, internship);
  }

  public patchInternship(id: number, internship: InternshipModel) {
    return this.http.patch(this.INTERNSHIP_URL + "/" + id, internship)
  }

  public deleteInternship(id: number) {
    return this.http.delete(this.INTERNSHIP_URL + "/" + id)
  }
}
