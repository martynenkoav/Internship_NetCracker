package com.example.attempt.rest;

import com.example.attempt.model.Form;
import com.example.attempt.service.FormServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("api/v1/form")
public class FormRestControllerV1 {
    @Autowired
    private FormServiceImpl formService;
    @RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Form> getForm(@PathVariable Long form_id) {
        if(form_id == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Form form = this.formService.getById(form_id);

        if (form == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(form,HttpStatus.OK);
    }

    @RequestMapping(value="", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Form> saveForm(@RequestBody Form form){
        HttpHeaders headers = new HttpHeaders();

        if(form == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.formService.save(form);
        return new ResponseEntity<>(form, headers, HttpStatus.CREATED);
    }
    @RequestMapping(value="",method=RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Form> updateForm(@RequestBody Form form, UriComponentsBuilder builder){
        HttpHeaders headers = new HttpHeaders();

        if (form == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.formService.save(form);

        return new ResponseEntity<>(form, headers, HttpStatus.OK);
    }
    @RequestMapping(value="{id}",method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Form> deleteForm (@PathVariable ("id") Long id){

        Form form = this.formService.getById(id);

        if(form == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        this.formService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @RequestMapping(value="",method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Form>> getAllForms(){
        List<Form> forms = this.formService.getAll();

        if(forms.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(forms, HttpStatus.OK);
    }
}
