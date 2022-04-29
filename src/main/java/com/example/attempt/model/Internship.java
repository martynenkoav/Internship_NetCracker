package com.example.attempt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "internship")
@Getter
@Setter
@ToString
public class Internship extends BaseEntity {

    @Column(name = "description")
    private String description;

    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    @Column(name = "responses")
    private Long responses;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    /*@OneToMany()
    @JoinColumn(name = "forms")
    private Set<Form> formSet;*/

    public Internship(String description, String name, String url, Long responses) {
        this.description = description;
        this.name = name;
        this.url = url;
        this.responses = responses;
    }

    public Internship() {
    }
}
