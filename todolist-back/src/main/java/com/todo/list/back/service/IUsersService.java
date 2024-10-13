package com.todo.list.back.service;

import com.todo.list.back.dto.RegisterResponse;
import com.todo.list.back.model.Users;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IUsersService {
    Users save(Users users);
    Optional<Users> findById(UUID id);
    List<Users> findAll();
    void deleteByid(UUID id);
    Optional<Users> get(Integer id);
    Optional<RegisterResponse> findByEmailAndAndPassword(String username, String password);

    UserDetailsService userDetailsService();
}
