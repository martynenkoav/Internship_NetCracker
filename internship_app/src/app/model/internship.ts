import {Company} from "./company";
import {Tag} from "../component/internship/internship.component";
import {Observable} from "rxjs";

export class Internship {
  id: number;
  description: string;
  name: string;
  company_id: number;
  company: Company;
  url: string;
  responses: number;
  tags: String[] = [];
}
