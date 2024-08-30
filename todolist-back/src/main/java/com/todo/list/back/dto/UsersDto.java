package com.todo.list.back.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Set;
import java.util.UUID;

@Data
@Builder
public class UsersDto {
    private UUID id;
    private String username;
    private String password;
    private String email;
    private Set<UUID> taskIds; // IDs de las tareas asociadas
    private UUID recoveryId; // ID de la recuperación asociada
}
