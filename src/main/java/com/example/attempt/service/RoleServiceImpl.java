package com.example.attempt.service;

import com.example.attempt.model.Role;
import com.example.attempt.model.User;
import com.example.attempt.model.UserBuilder;
import com.example.attempt.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class RoleServiceImpl implements RoleService{
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role getById(Long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public Role getRoleFromBuilder(UserBuilder userbuilder){
        return getById(userbuilder.getId());
    }

   /* @Override
    public Role findByRoleName(String name) {
        return null;
    }*/

   /* @Override
    public void save(Role role) {

    }

    @Override
    public void delete(Long id) {

    }*/
}
