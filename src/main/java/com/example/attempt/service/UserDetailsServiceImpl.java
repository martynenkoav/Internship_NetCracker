package com.example.attempt.service;

import com.example.attempt.model.User;
import com.example.attempt.model.UserDetailsImpl;
import com.example.attempt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (userRepository.findByUsername(username) == null){
            throw new UsernameNotFoundException("User Not Found with username: " + username);
        } else {
            User user = userRepository.findByUsername(username);
            return new UserDetailsImpl(user);
        }
    }
}