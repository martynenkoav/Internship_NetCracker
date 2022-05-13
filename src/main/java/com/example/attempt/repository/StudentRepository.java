package com.example.attempt.repository;

import com.example.attempt.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student getStudentByUserId(Long id);
}
