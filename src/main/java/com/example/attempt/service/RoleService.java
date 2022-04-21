package com.example.attempt.service;

import com.example.attempt.model.Role;
import com.example.attempt.model.UserBuilder;

public interface RoleService {
    Role getById(Long id);

    Role getRoleFromBuilder(UserBuilder userbuilder);

   /* Role findByRoleName(String name);*/

   /* void save(Role role);

    void delete(Long id);*/
}
