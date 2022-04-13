package com.example.attempt.rest;

import com.example.attempt.model.Internship;
import com.example.attempt.service.InternshipServiceImpl;
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
@RequestMapping("api/v1/internship")
public class InternshipRestControllerV1 {

    @Autowired
    private InternshipServiceImpl internshipService;
    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> getInternship(@PathVariable("id") Long internshipId) {
        if(internshipId == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Internship internship = this.internshipService.getById(internshipId);

        if (internship == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(internship,HttpStatus.OK);
    }

    @RequestMapping(value="", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> saveInternship(@RequestBody Internship internship){
        HttpHeaders headers = new HttpHeaders();

        if(internship == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.internshipService.save(internship);
        return new ResponseEntity<>(internship, headers, HttpStatus.CREATED);
    }
    @RequestMapping(value="",method=RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> updateInternship(@RequestBody Internship internship, UriComponentsBuilder builder){
        HttpHeaders headers = new HttpHeaders();

        if (internship == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.internshipService.save(internship);

        return new ResponseEntity<>(internship, headers, HttpStatus.OK);
    }
    @RequestMapping(value="{id}",method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Internship> deleteInternship (@PathVariable("id") Long id){
        Internship internship = this.internshipService.getById(id);

        if(internship == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.internshipService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @RequestMapping(value="",method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Internship>> getAllInternships(){
        List<Internship> internships = this.internshipService.getAll();

        if(internships.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(internships, HttpStatus.OK);
    }

}
