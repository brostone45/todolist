package com.todo.list.back.repository;

import com.todo.list.back.dto.UsersDto;
import com.todo.list.back.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface IUsersRepository extends JpaRepository<Users ,UUID> {

    Optional<Users> findById(UUID id);

    void deleteById(UUID id);

    Optional<Users> findByEmailAndAndPassword(String username, String password);

    Optional<Users> findByEmail(String email);
}
