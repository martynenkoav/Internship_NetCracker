import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InternshipModel} from "../model/internshipModel";
import {map, Observable, of} from 'rxjs';
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  INTERNSHIP_URL: string = 'http://localhost:8081/api/v1/internship';

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

  public postInternship(id: Number, internship: InternshipModel) {
    return this.http.post(this.INTERNSHIP_URL + "/" + id, internship);
  }

  public patchInternship(id: Number, internship: InternshipModel) {
    return this.http.patch(this.INTERNSHIP_URL + "/" + id, internship)
  }

  public deleteInternship(id: number) {
    return this.http.delete(this.INTERNSHIP_URL + "/" + id)
  }
}
