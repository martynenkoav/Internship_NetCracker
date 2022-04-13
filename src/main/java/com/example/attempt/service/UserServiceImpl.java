/*
package com.example.attempt.service;

import com.example.attempt.model.User;
import com.example.attempt.repository.RoleRepository;
import com.example.attempt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRepository user_;

    @Autowired
    private RoleRepository role_;

    @Autowired
    private PasswordEncoder passwordEncoder;;

    @Override
    public boolean save(User user) {
        User userFromDB = userRepository.findByUsername(user.getUsername());

        if (userFromDB != null) {
            return false;
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(role_.getById(2L));
        user_.save(user);
        return true;
        */
/* подумать насчет того как происходит сохранение*//*

    }

    @Override
    public User findByUsername(String username) {
        return user_.findByUsername(username);
    }
}
*/
