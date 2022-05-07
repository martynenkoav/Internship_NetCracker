import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Internship} from "../model/internship";
import {catchError, map, Observable} from "rxjs";
import {Const} from "../const/const";

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  constructor(private http: HttpClient) {
  }

  INTERNSHIP_URL: string = Const.LOCALHOST_URL + 'api/internship';

  public getInternshipsByUserId(id: number): Observable<Internship[]> {
    return this.http.get<Internship[]>(this.INTERNSHIP_URL + "/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public getInternshipsByCompanyId(id: number): Observable<Internship[]> {
    return this.http.get<Internship[]>(this.INTERNSHIP_URL + "/company/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public getInternshipsByStudentId(id: number): Observable<Internship[]> {
    return this.http.get<Internship[]>(this.INTERNSHIP_URL + "/student/" + id).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public getInternships(): Observable<Internship[]> {
    return this.http.get<Internship[]>(this.INTERNSHIP_URL).pipe(
      map((resp) => {
        console.log(resp);
        return resp;
      })
    )
  }

  public postInternship(id: number, internship: Internship) {
    return this.http.post(this.INTERNSHIP_URL + "/" + id, internship);
  }

  public patchInternship(id: number, internship: Internship) {
    return this.http.patch(this.INTERNSHIP_URL + "/" + id, internship)
  }

  public deleteInternship(id: number) {
    return this.http.delete(this.INTERNSHIP_URL + "/" + id)
  }
}
