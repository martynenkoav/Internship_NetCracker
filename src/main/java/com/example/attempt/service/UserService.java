package com.example.attempt.service;


import com.example.attempt.model.User;
import com.example.attempt.model.UserBuilder;


import java.util.List;

public interface UserService {

    User getById(Long id);

    User findByUsername(String username);

    void save(UserBuilder userbuilder);

    void delete(Long id);

    User getUserFromBuilder(UserBuilder userbuilder);

    List<User> getAll();
}
