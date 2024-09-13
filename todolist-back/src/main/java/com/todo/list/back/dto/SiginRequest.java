package com.todo.list.back.dto;

import lombok.Data;

@Data
public class SiginRequest {
    private String password;
    private String email;
}
