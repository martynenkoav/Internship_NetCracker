
package com.example.attempt.model;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
//import com.bezkoder.spring.security.postgresql.models.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import static java.util.stream.Collectors.toList;
public class UserDetailsImpl implements UserDetails {
    private User user;

    private Boolean isActive;

    private List<GrantedAuthority> grantedAuthorityList;

    public UserDetailsImpl(User user) {
        this.user = user;
        this.isActive = true;
        grantedAuthorityList = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() { return grantedAuthorityList; }

    @Override
    public String getPassword() { return this.user.getPassword(); }


    @Override
    public String getUsername() { return this.user.getUsername(); }

    @Override
    public boolean isAccountNonExpired() { return this.isActive; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return true; }

    public Long getId() {
        return this.user.getId();
    }
}


