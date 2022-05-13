package com.example.attempt.repository;

import com.example.attempt.model.Internship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InternshipRepository extends JpaRepository<Internship, Long> {

    @Query(value = "select * from internship "
                 + "where company_id = :id",
            nativeQuery = true)
    List<Internship> getAllByCompanyId(Long id);

}
