package com.example.attempt.dto;

import com.example.attempt.model.Company;
import com.example.attempt.model.ETag;
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
    private ETag tag;

    InternshipDTO(Long id, String name, String description, Long company_id, String url, Long responses, ETag tag) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.company_id = company_id;
        this.url = url;
        this.responses = responses;
        this.tag = tag;
    }

    public Internship toInternship() {
        Internship internship = new Internship(
                this.getDescription(),
                this.getName(),
                this.getUrl(),
                this.getResponses(),
                this.getTag());

        Long company_id = this.getCompany_id();

        Company company = new Company();
        company.setId(company_id);

        internship.setCompany(company);
        return internship;
    }
}
