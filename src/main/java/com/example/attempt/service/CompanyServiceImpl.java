package com.example.attempt.service;

import com.example.attempt.model.Company;
import com.example.attempt.repository.CompanyRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
public class CompanyServiceImpl implements CompanyService{

    @Autowired
    CompanyRepository companyRepository;


    @Override
    public Company getById(Long id) {
        log.info("IN CompanyService getById {}", id);
        return companyRepository.findById(id).get();
    }

    @Override
    public void save(Company company) {
        log.info("IN CompanyService save {}", company);
        companyRepository.save(company);
    }

    @Override
    public void delete(Long id) {
        log.info("IN CompanyService delete {}", id);
        companyRepository.deleteById(id);
    }

    @Override
    public List<Company> getAll() {
        log.info("IN CompanyService getAll");
        return companyRepository.findAll();
    }


}
