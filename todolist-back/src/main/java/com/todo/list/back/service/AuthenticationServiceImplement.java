package com.todo.list.back.service;

import com.todo.list.back.dto.JwtAuthenticationResponse;
import com.todo.list.back.dto.SiginRequest;
import com.todo.list.back.dto.SignUpRequest;
import com.todo.list.back.model.Users;
import com.todo.list.back.repository.IUsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImplement implements IAuthenticationService {

    private final IUsersRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;

    @Override
    public Users signUp(SignUpRequest signUpRequest) {
        Users user = new Users();

        user.setEmail(signUpRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public JwtAuthenticationResponse siginin(SiginRequest siginRequest) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(siginRequest.getEmail(),
                siginRequest.getPassword());

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        var user = userRepository.findByEmail(siginRequest.getEmail()).orElseThrow(() -> new IllegalArgumentException("invalid email or password"));
        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.refreshToken(new HashMap<>(), user);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);
        return jwtAuthenticationResponse;
    }
}
