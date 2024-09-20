package com.todo.list.back.controller;

import com.todo.list.back.dto.UsersDto;
import com.todo.list.back.model.Users;
import com.todo.list.back.service.IUsersService;
import com.todo.list.back.service.UploadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private IUsersService usersService;

    @Autowired
    private UploadFileService upload;

    @PostMapping("/register")
    public Users usersAdd(@RequestBody Users users) throws Exception {
        String defaultImages = "default.jpg";
        users.setAvatar(defaultImages);
        return usersService.save(users);
    }

    @PostMapping("/signUp")
    public ResponseEntity<Optional<UsersDto>> usersLogIn(@RequestBody Users users) {
        Optional<UsersDto> user = usersService.findByEmailAndAndPassword(users.getEmail(), users.getPassword());

        if(user.isPresent()) {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/sayHello")
    public String sayHello() {
        return "Hello World";
    }

    @GetMapping("/sayHello2")
    public String sayHello2() {
        return "Hello World2";
    }
}
