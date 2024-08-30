package com.todo.list.back.service;

import com.todo.list.back.model.Users;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IUsersService {
    void save(Users users);
    Optional<Users> findById(UUID id);
    List<Users> findAll();
    void deleteByid(UUID id);
    Optional<Users> get(Integer id);
}
