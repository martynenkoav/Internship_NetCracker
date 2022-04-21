package com.example.attempt.service;

import com.example.attempt.model.Role;
import com.example.attempt.model.User;
import com.example.attempt.model.UserBuilder;
import com.example.attempt.repository.RoleRepository;
import com.example.attempt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Override
    public User getById(Long id) {
       // log.info("IN UserService getById {}", id);
        return userRepository.findById(id).get();
    }


    @Override
    public User getUserFromBuilder(UserBuilder userbuilder){
        return new User(userbuilder.getUsername(), userbuilder.getPassword());
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void save(UserBuilder userbuilder) {
        User user = getUserFromBuilder(userbuilder);
        Role role;
       /* Role role = new Role();*/
        if (userbuilder.getRole() == 2L) {
            role = this.roleRepository.getById(2L);
        } else {
            role = this.roleRepository.getById(3L);
        }
        //Role role = this.roleservice.getRoleFromBuilder(userbuilder);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(role);
        user.setRoles(roleSet);
        //Role role = new Role(); подумать насчет добавления роли
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
