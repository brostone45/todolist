package com.todo.list.back.service;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JWTService {
    String generateToken(UserDetails userDetails);

    String refreshToken(Map<String, Object> extraClaims, UserDetails userDetails);

    String extractUsername(String token);

    Boolean isTokenValid(String token, UserDetails userDetails);

}
