package com.example.attempt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "company")
@Getter
@Setter
@ToString
public class Company extends BaseEntity {
    @Column(name = "company_name")
    private String companyName;

    @Column(name = "description")
    private String description;

    @OneToMany()
    @JoinColumn(name = "internships")
    private Set<Internship> internshipSet;

    /*@OneToMany(mappedBy = "company")
    private Set<Internship> internshipSet;*/
}
