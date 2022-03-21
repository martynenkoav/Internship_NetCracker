package com.example.attempt.service;

import com.example.attempt.model.Student;
import com.example.attempt.repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student getById(Long id){
        log.info("IN StudentService getById {}", id);
        return studentRepository.getById(id);
    }

    @Override
    public void save(Student student){
        log.info("IN StudentService save {}", student);
        studentRepository.save(student);
    }

    @Override
    public void delete(Long id){
        log.info("IN StudentService delete {}", id);
        studentRepository.deleteById(id);
    }

    @Override
    public List<Student> getAll(){
        log.info("IN StudentService getAll");
        return studentRepository.findAll();
    }
}
