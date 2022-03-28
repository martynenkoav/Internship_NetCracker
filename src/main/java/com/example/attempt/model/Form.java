package com.example.attempt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "form")
@Getter
@Setter
@ToString
public class Form extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "student_id", foreignKey = @ForeignKey(name = "student_id"))
    private Student student;


    @ManyToOne
    @JoinColumn(name = "internship_id", foreignKey = @ForeignKey(name = "internship_id"))
    private Internship internship;
}
