package com.example.attempt.dto;

import com.example.attempt.model.Company;
import com.example.attempt.security.util.EmailValidator;
import com.example.attempt.service.CompanyService;
import com.example.attempt.serviceImplementation.CompanyServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
@Data
public class CompanyDTO {
    /*private Long id;*/
    private String name;
    private String description;
    private String email;
    private String address;
    private EmailValidator emailValidator;



    public CompanyDTO(/*Long id, */String name, String description, String email, String address) {
        /*this.id = id;*/
        this.name = name;
        this.description = description;
        this.email = email;
        this.address = address;
    }

    public Company toCompany(Long id, Company company){
        company.setName(this.name);
        company.setDescription(this.description);
        company.setEmail(this.email);
        company.setAddress(this.address);
        return company;
    }
}
