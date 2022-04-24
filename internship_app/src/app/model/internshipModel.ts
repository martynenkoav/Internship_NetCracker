import {CompanyModel} from "./companyModel";

export class InternshipModel {
  /*constructor(
    description: string,
    company: CompanyModel,
    name: string
  ) { }*/

  id: number;
  description: string;
  name: string;
  company_id: number;
  company: CompanyModel;
}
