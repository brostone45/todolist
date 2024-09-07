package com.todo.list.back.controller;

import com.todo.list.back.dto.UsersDto;
import com.todo.list.back.model.Users;
import com.todo.list.back.service.IUsersService;
import com.todo.list.back.service.UploadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private IUsersService usersService;

    @Autowired
    private UploadFileService upload;

    @PostMapping("/add")
    public Users usersAdd(@RequestBody Users users) throws Exception {
        String defaultImages = "default.jpg";
        users.setAvatar(defaultImages);
        return usersService.save(users);
    }

    @PostMapping("/access")
    public String usersLogIn(@RequestBody Users users) {
        Optional<UsersDto> user = usersService.findByEmailAndAndPassword(users.getEmail(), users.getPassword());

        if(user.isPresent()) {
            return "redirect:/users";
        } else {
            return "";
        }
    }
}
