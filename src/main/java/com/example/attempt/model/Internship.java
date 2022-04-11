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

    @ManyToOne()
    @JoinColumn(name = "company_id", foreignKey = @ForeignKey(name = "company_id"))
    private Company company;

    @OneToMany()
    @JoinColumn(name = "forms")
    private Set<Form> formSet;
}
