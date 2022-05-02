import {CompanyModel} from "./companyModel";

export class InternshipModel {
  id: number;
  description: string;
  name: string;
  company_id: number;
  company: CompanyModel;
  url: string;
  responses: number;
}
