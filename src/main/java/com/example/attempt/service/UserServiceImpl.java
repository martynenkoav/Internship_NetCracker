package com.example.attempt.service;

import com.example.attempt.model.User;
import com.example.attempt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Override
    public User getById(Long id) {
       // log.info("IN UserService getById {}", id);
        return userRepository.findById(id).get();
    }

    @Override
    public void save(User user) {
     //   log.info("IN UserService save {}", user);
        userRepository.save(user);
    }

    @Override
    public void delete(Long id) {
       // log.info("IN CompanyService delete {}", id);
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getAll() {
       // log.info("IN CompanyService getAll");
        return userRepository.findAll();
    }
}
