package com.example.attempt.rest;

import com.example.attempt.security.EmailValidator;
import com.example.attempt.model.Student;
import com.example.attempt.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentRestController {

    @Autowired
    private StudentServiceImpl studentService;

    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Student> getStudentByUserId(@PathVariable("id") Long userId) {
        Long studentId = this.studentService.getByUserId(userId).getId();
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Student student = this.studentService.getById(studentId);

        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) {
        HttpHeaders headers = new HttpHeaders();

        if (student == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (!EmailValidator.validate(student.getEmail(), EmailValidator.EMAIL_PATTERN)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.studentService.save(student);
        return new ResponseEntity<>(student, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "", method = RequestMethod.PATCH, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Student> updateStudent(@RequestBody Student student, UriComponentsBuilder builder) {
        HttpHeaders headers = new HttpHeaders();

        if (student == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.studentService.save(student);

        return new ResponseEntity<>(student, headers, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Student> deleteStudent(@PathVariable("id") Long id) {
        Student student = this.studentService.getById(id);

        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.studentService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = this.studentService.getAll();

        if (students.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
}
