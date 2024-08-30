package com.todo.list.back.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String username;
    private String password;
    private String email;

    // Relación OneToMany con Tasks
    @OneToMany(mappedBy = "user")
    private Set<Tasks> tasks;

    // Relación OneToOne con Recovery
    @OneToOne(mappedBy = "user")
    private Recovery recovery;
}
