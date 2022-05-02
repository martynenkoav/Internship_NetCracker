package com.example.attempt.dto;

import com.example.attempt.security.EmailValidator;
import lombok.Data;

@Data
public class CompanyDTO {
    private Long id;
    private String name;
    private String description;
    private String email;
    private String address;
    private EmailValidator emailValidator;

    CompanyDTO(Long id, String name, String description, String email, String address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.email = email;
        this.address = address;
    }
}
