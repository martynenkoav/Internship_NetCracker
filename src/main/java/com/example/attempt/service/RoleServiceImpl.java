package com.example.attempt.service;

import com.example.attempt.DTO.UserDTO;
import com.example.attempt.model.Role;
import com.example.attempt.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role getById(Long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public Role getRoleFromBuilder(UserDTO userDTO) {
        return getById(userDTO.getId());
    }
}
