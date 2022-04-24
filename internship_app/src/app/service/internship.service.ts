import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InternshipModel} from "../model/internshipModel";
import {map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  constructor(private http: HttpClient) {
  }

  INTERNSHIP_URL: string = 'http://localhost:8081/api/v1/internship';

  /*public getInternshipById(id: number):Observable<InternshipModel> {
    return this.http.get<InternshipModel>(this.INTERNSHIP_URL + "/" + id).pipe(
      map((resp)=>{
        console.log(resp);
        return resp;
      })
    )
  }*/

  public getInternshipsByCompanyId(id: number): Observable<InternshipModel[]> {
    return this.http.get<InternshipModel[]>(this.INTERNSHIP_URL + "/" + id).pipe(
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

  public postInternship(internshipForm: InternshipModel) {
    return this.http.post(this.INTERNSHIP_URL, internshipForm);
  }

  public patchInternship(internshipForm: InternshipModel) {
    return this.http.patch(this.INTERNSHIP_URL, internshipForm)
  }

  public deleteInternship(id: number) {
    return this.http.delete(this.INTERNSHIP_URL + "/" + id)
  }
}
