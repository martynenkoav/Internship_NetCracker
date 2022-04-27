package com.example.attempt.model;

import javax.persistence.Column;

public class UserBuilder {
    private Long id;
    private String username;
    private String password;
    private Long roleId;

    UserBuilder(Long id, String username, String password, Long roleId){
        this.id = id;
        this.username = username;
        this.password = password;
        this.roleId = roleId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getRole() {
        return roleId;
    }

    public void setRole(Long roleId) {
        this.roleId = roleId;
    }
}
