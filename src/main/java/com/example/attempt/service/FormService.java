package com.example.attempt.service;

import com.example.attempt.model.Form;

import java.util.List;

public interface FormService {
    Form getById(Long id);

    void save(Form form);

    void delete(Long id);

    List<Form> getAll();
}
