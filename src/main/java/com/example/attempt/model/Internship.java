package com.example.attempt.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "internship")
public class Internship {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

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

    public Internship(String description, String name, String url, Long responses) {
        this.description = description;
        this.name = name;
        this.url = url;
        this.responses = responses;
    }

    public Internship() {
    }
}
