package com.example.attempt.repository;

import com.example.attempt.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Long> {
    @Query(value = "select * from student "
                 + "where user_id = :id",
            nativeQuery = true)
    Student getByUserId(Long id);
}
