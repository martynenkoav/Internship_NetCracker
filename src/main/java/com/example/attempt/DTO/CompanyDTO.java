package com.example.attempt.DTO;

import com.example.attempt.security.EmailValidator;

public class CompanyDTO {
    private Long user_id;
    private String name;
    private String description;
    private String email;
    private String address;
    private EmailValidator emailValidator;

    CompanyDTO(Long id, String name, String description, String email, String address) {
        this.user_id = id;
        this.name = name;
        this.description = description;
        this.email = email;
        this.address = address;
    }

    public Long getId() {
        return user_id;
    }

    public void setId(Long id) {
        this.user_id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String password) {
        this.description = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
