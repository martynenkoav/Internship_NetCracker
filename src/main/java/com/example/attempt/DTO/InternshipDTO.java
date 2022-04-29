package com.example.attempt.DTO;

import com.example.attempt.model.Company;
import com.example.attempt.model.Internship;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InternshipDTO {
    private Long id;
    private String name;
    private String description;
    private Long company_id;

    InternshipDTO(Long id, String name, String description, Long company_id){
        this.id = id;
        this.name = name;
        this.description = description;
        this.company_id = company_id;
    }

    public Internship toInternship(){
        Internship internship = new Internship(
                this.getDescription(),
                this.getName());

        Long company_id = this.getCompany_id();

        Company company = new Company();
        company.setId(company_id);

        internship.setCompany(company);
        return internship;
    }
}
