package com.example.attempt.rest;

import com.example.attempt.DTO.InternshipDTO;
import com.example.attempt.model.Internship;
import com.example.attempt.service.CompanyServiceImpl;
import com.example.attempt.service.InternshipServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/internship")
public class InternshipRestController {

    @Autowired
    private InternshipServiceImpl internshipService;

    @Autowired
    private CompanyServiceImpl companyService;

    //@PreAuthorize("#id == authentication.principal.id")
    @RequestMapping(value = "{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> saveInternship(@PathVariable("id") Long id, @RequestBody InternshipDTO internshipDTO) {
        HttpHeaders headers = new HttpHeaders();
        Internship internship = internshipDTO.toInternship();
        if (internship == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.internshipService.save(internship);
        return new ResponseEntity<>(internship, headers, HttpStatus.CREATED);
    }


    //@PreAuthorize("#id == authentication.principal.id")
    @RequestMapping(value = "{id}", method = RequestMethod.PATCH, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> updateInternship(@PathVariable Long id, @RequestBody InternshipDTO internshipDTO) {
        HttpHeaders headers = new HttpHeaders();

        Internship internship = this.internshipService.getById(internshipDTO.getId());

        internship.setResponses(internshipDTO.getResponses());

        if (internship == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.internshipService.save(internship);
        return new ResponseEntity<>(internship, headers, HttpStatus.OK);
    }

    //@PreAuthorize("#id == authentication.principal.id")
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> deleteInternship(@PathVariable("id") Long id) {
        Internship internship = this.internshipService.getById(id);

        if (internship == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.internshipService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Internship>> getAllInternships() {
        List<Internship> internships = this.internshipService.getAll();

        if (internships.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(internships, HttpStatus.OK);
    }

    //@PreAuthorize("#id == authentication.principal.id")
    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Internship>> getAllInternshipsByCompanyId(@PathVariable("id") Long id) {

        Long companyId = this.companyService.getByUserId(id).getId();

        if (companyId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Internship> internships = this.internshipService.getAllByCompanyId(companyId);

        if (internships.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(internships, HttpStatus.OK);
    }
}
