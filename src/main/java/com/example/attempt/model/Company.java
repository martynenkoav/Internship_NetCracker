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
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    /*@Column(name = "user_id")
    private Long userId;*/

    @OneToOne(fetch = FetchType.LAZY)
    private User user;

   /* @OneToMany()
    @JoinColumn(name = "internships")
    private Set<Internship> internshipSet;*/

}
