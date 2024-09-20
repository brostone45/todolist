package com.todo.list.back.service;

import com.todo.list.back.dto.UsersDto;
import com.todo.list.back.model.Users;
import com.todo.list.back.repository.IUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsersServiceImplement implements IUsersService {

    @Autowired
    private IUsersRepository usersRepository;

    @Override
    public Users save(Users users) {
        return usersRepository.save(users);
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

    @Override
    public Optional<UsersDto> findByEmailAndAndPassword(String username, String password) {
        Optional<Users> findUser =  usersRepository.findByEmailAndPassword(username, password);
        return findUser.map(this::mapToUsersDto);
    }

    private UsersDto mapToUsersDto(Users users) {
        UsersDto userDto = UsersDto.builder()
                .email(users.getEmail())
                .password(users.getPassword())
                .username(users.getUsername())
                .build();

        return userDto;
    }

    @Override
    public UserDetailsService userDetailsService() {
        return username -> usersRepository.findUsersByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

}
