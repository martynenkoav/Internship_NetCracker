package com.example.attempt.service;

import com.example.attempt.model.User;
import com.example.attempt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserService {

    boolean save(User user);

    User findByUsername(String username);
}
