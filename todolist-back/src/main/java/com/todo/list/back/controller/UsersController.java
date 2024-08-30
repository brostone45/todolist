package com.todo.list.back.controller;

import com.todo.list.back.model.Users;
import com.todo.list.back.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private IUsersService usersService;


    @PostMapping("/add")
    public Users usersAdd(@RequestBody Users users) {
        return usersService.save(users);
    }
}
