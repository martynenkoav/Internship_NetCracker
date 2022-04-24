package com.example.attempt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InternshipBuilder {
    private Long id;
    private String name;
    private String description;
    private Long company_id;

    InternshipBuilder(Long id, String name, String description, Long company_id){
        this.id = id;
        this.name = name;
        this.description = description;
        this.company_id = company_id;
    }
}
