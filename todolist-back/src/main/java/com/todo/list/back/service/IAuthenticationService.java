package com.todo.list.back.service;

import com.todo.list.back.dto.JwtAuthenticationResponse;
import com.todo.list.back.dto.SiginRequest;
import com.todo.list.back.dto.SignUpRequest;
import com.todo.list.back.model.Users;

public interface IAuthenticationService {
    Users signUp(SignUpRequest signUpRequest);

    JwtAuthenticationResponse siginin(SiginRequest siginRequest);
}
