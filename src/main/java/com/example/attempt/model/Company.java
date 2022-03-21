package com.example.attempt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

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
}
