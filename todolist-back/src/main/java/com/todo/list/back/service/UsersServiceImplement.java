package com.todo.list.back.service;

import com.todo.list.back.dto.UsersDto;
import com.todo.list.back.model.Users;
import com.todo.list.back.repository.IUsersRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Getter
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
        Optional<Users> findUser =  usersRepository.findByEmailAndAndPassword(username, password);
        return findUser.map(this::mapToUsersDto);
    }

    @Override
    public Optional<UsersDto> findByEmail(String email) {
        return usersRepository.findByEmail(email).map(this::mapToUsersDto);
    }


    @Override
    public UserDetailsService userDetailService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                // Usamos findByEmail para buscar al usuario y mapearlo a UsersDto
                return (UserDetails) findByEmail(email)
                        .map(usersDto -> new org.springframework.security.core.userdetails.User(
                                usersDto.getUsername(),
                                usersDto.getPassword(),
                                List.of() // Lista vacía de roles si no los usas
                        ))
                        .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
            }
        };
    }

    private UsersDto mapToUsersDto(Users users) {
        UsersDto userDto = UsersDto.builder()
                .email(users.getEmail())
                .password(users.getPassword())
                .username(users.getUsername())
                .build();

        return userDto;
    }

}
