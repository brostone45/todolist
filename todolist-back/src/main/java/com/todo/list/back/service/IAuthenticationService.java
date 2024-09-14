package com.todo.list.back.service;

import com.todo.list.back.dto.*;
import com.todo.list.back.model.Users;

public interface IAuthenticationService {
    Users signUp(UsersDto signUpRequest);

    JwtAuthenticationResponse siginin(UsersDto siginRequest);


    JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
