package com.todo.list.back.service;

import com.todo.list.back.model.Users;
import com.todo.list.back.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsersServiceImplement implements IUsersService {

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public void save(Users users) {
        usersRepository.save(users);
    }

    @Override
    public Optional<Users> findById(UUID id) {
        return usersRepository.findById(id);
    }

    @Override
    public List<Users> findAll() {
        return usersRepository.findAll();
    }

    @Override
    public void deleteByid(UUID id) {
        usersRepository.deleteById(id);
    }

    @Override
    public Optional<Users> get(Integer id) {
        return Optional.empty();
    }
}
