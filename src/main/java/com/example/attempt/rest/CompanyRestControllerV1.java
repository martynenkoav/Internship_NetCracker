package com.example.attempt.rest;

import com.example.attempt.model.Company;
import com.example.attempt.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/company")
public class CompanyRestControllerV1 {

    @Autowired
    private CompanyService companyService;

    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Company> getCompany(@PathVariable("id") Long companyId) {
        if (companyId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Company company = this.companyService.getById(companyId);

        if (company == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Company> saveCompany(@RequestBody Company company) {
        HttpHeaders headers = new HttpHeaders();

        if (company == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.companyService.save(company);
        return new ResponseEntity<>(company, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Company> updateCompany(@RequestBody Company company, UriComponentsBuilder builder) {
        HttpHeaders headers = new HttpHeaders();

        if (company == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.companyService.save(company);

        return new ResponseEntity<>(company, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Company> deleteCompany(@PathVariable("id") Long id) {
        Company company = this.companyService.getById(id);

        if (company == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.companyService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = this.companyService.getAll();

        if (companies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }
}
