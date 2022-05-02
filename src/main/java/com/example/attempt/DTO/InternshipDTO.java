package com.example.attempt.DTO;

import com.example.attempt.model.Company;
import com.example.attempt.model.Internship;
import lombok.Data;

@Data
public class InternshipDTO {
    private Long id;
    private String name;
    private String description;
    private Long company_id;
    private String url;
    private Long responses;

    InternshipDTO(Long id, String name, String description, Long company_id, String url, Long responses) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.company_id = company_id;
        this.url = url;
        this.responses = responses;
    }

    public Internship toInternship() {
        Internship internship = new Internship(
                this.getDescription(),
                this.getName(),
                this.getUrl(),
                this.getResponses());

        Long company_id = this.getCompany_id();

        Company company = new Company();
        company.setId(company_id);

        internship.setCompany(company);
        return internship;
    }
}
