package com.todo.list.back.service;

import com.todo.list.back.config.JwtService;
import com.todo.list.back.dto.AuthResponse;
import com.todo.list.back.dto.AuthenticationRequest;
import com.todo.list.back.dto.RegisterRequest;
import com.todo.list.back.model.Role;
import com.todo.list.back.model.Users;
import com.todo.list.back.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImplement implements IAuthenticationService {

    @Autowired
    private IUsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest registerRequest) {
        String defaultImages = "default.jpg";

        Users user = new Users();
        user.setUsernamelog(registerRequest.getUsernamelog());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setAvatar(defaultImages);
        user.setRole(Role.USER);
        usersRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthResponse.builder().token(jwtToken).build();
    }

    @Override
    public AuthResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );
        var user = usersRepository.findUsersByEmail(authenticationRequest.getEmail()).orElseThrow();
        var jwt = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwt).build();
    }
}
