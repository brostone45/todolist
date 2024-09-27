package com.todo.list.back.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

@Controller
@RequestMapping("")
public class TestOauthController {

    private static final Logger logger = LoggerFactory.getLogger(TestOauthController.class);
    @GetMapping
    public String Home(){
        return "llega";
    }

    @GetMapping("/principal")
    @ResponseBody
    public Principal user(Principal user) {
        logger.info("User details: {}", user);
        return user;
    }
}
