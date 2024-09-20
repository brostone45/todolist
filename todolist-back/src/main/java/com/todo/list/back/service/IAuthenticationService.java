package com.todo.list.back.service;


import com.todo.list.back.dto.AuthResponse;
import com.todo.list.back.dto.AuthenticationRequest;
import com.todo.list.back.dto.RegisterRequest;

public interface IAuthenticationService {

    AuthResponse register (RegisterRequest registerRequest);

    AuthResponse authenticate (AuthenticationRequest authenticationRequest);
}
