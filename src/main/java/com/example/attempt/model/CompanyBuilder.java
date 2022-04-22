package com.example.attempt.model;

public class CompanyBuilder {
    private Long user_id;
    private String name;
    private String description;

    CompanyBuilder(Long id, String name, String description){
        this.user_id = id;
        this.name = name;
        this.description = description;
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

}
