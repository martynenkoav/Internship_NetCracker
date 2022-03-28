package com.example.attempt.service;

import com.example.attempt.model.Form;
import com.example.attempt.repository.FormRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class FormServiceImpl implements FormService{

    @Autowired
    FormRepository formRepository;

    @Override
    public Form getById(Long id) {
        log.info("IN FormService getById {}", id);
        return formRepository.findById(id).get();
    }

    @Override
    public void save(Form form) {
        log.info("IN FormService save {}", form);
        formRepository.save(form);
    }

    @Override
    public void delete(Long id) {
        log.info("IN FormService delete {}", id);
        formRepository.deleteById(id);
    }

    @Override
    public List<Form> getAll() {
        log.info("IN FormService getAll");
        return formRepository.findAll();
    }
}
