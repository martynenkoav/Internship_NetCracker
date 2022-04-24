package com.example.attempt.repository;

import com.example.attempt.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    @Query(value = "select * from company "
                 + "where user_id = :id",
            nativeQuery = true)
    public Company getByUserId(Long id);
}
