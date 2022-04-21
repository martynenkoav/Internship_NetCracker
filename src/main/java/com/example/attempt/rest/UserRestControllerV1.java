package com.example.attempt.rest;

import com.example.attempt.model.Company;
import com.example.attempt.model.User;
import com.example.attempt.service.CompanyService;
import com.example.attempt.service.RoleService;
import com.example.attempt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/login")
public class UserRestControllerV1 {


    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;


    private RoleService roleService;

  /*  @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> getUser(@PathVariable("id") Long userId) {
        if (userId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User user = this.userService.getById(userId);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }*/

    /*@RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> getUser(HttpServletRequest request) {
        HttpHeaders headers = new HttpHeaders();
        Principal principal = request.getUserPrincipal();
        String usernameForDB = principal.getName();

        if (this.userService.findByUsername(usernameForDB) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User userFromBD = this.userService.findByUsername(usernameForDB);
        return new ResponseEntity<>(userFromBD, HttpStatus.OK);

    }*/
    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> postUser(@RequestBody User user) {
        HttpHeaders headers = new HttpHeaders();

        if ((user == null) || (this.userService.findByUsername(user.getUsername()) == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User userFromBD = this.userService.findByUsername(user.getUsername());
        return new ResponseEntity<>(userFromBD, headers, HttpStatus.CREATED);
       /* if (user.getPassword().equals(userFromBD.getPassword())){
            return new ResponseEntity<>(userFromBD, headers, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }*/
    }

    /*@RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> updateUser(@RequestBody User user, UriComponentsBuilder builder) {
        HttpHeaders headers = new HttpHeaders();

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.userService.save(user);

        return new ResponseEntity<>(user, headers, HttpStatus.OK);
    }*/

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") Long id) {
        User user = this.userService.getById(id);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.userService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

/*    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = this.userService.getAll();

        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }*/

}




