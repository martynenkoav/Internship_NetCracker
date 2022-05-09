package com.example.attempt.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
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

    @Column(name = "tag")
    private ETag tag;

    public Internship(String description, String name, String url, Long responses, ETag tag) {
        this.description = description;
        this.name = name;
        this.url = url;
        this.responses = responses;
        this.tag = tag;
    }

    public Internship() {
    }
}
