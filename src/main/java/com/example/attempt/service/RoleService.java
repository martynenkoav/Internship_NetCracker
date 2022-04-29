package com.example.attempt.service;

import com.example.attempt.DTO.UserDTO;
import com.example.attempt.model.Role;


public interface RoleService {
    Role getById(Long id);

    Role getRoleFromBuilder(UserDTO userDTO);

   /* Role findByRoleName(String name);*/

   /* void save(Role role);

    void delete(Long id);*/
}
