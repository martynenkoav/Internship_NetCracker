package com.example.attempt.security;

import com.example.attempt.model.Role;
import com.example.attempt.model.User;
import com.example.attempt.model.UserBuilder;
import com.example.attempt.model.UserDetailsImpl;
import com.example.attempt.payload.JwtResponse;
import com.example.attempt.payload.MessageResponse;
import com.example.attempt.repository.RoleRepository;
import com.example.attempt.repository.UserRepository;
import com.example.attempt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private UserService userService;
    @Autowired
    JwtUtils jwtUtils;
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserBuilder userBuilder) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userBuilder.getUsername(), userBuilder.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }
    @PostMapping("")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserBuilder userBuilder) {
        if (userRepository.existsByUsername(userBuilder.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }
        // Create new user's account
        User user = new User(userBuilder.getUsername(),
                encoder.encode(userBuilder.getPassword()));
        Long roleId = userBuilder.getRole();
        Set<Role> roles = new HashSet<>();
        if (roleId == 1) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);
        } else if (roleId == 2) {
            Role studentRole = roleRepository.findByName("ROLE_STUDENT")
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(studentRole);
        } else if (roleId == 3) {
            Role companyRole = roleRepository.findByName("ROLE_COMPANY")
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(companyRole);
        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}