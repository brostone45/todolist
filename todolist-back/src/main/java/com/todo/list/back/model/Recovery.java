package com.todo.list.back.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "recovery")
@Getter
@Setter
@NoArgsConstructor
public class Recovery {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private int recoveryCode;

    // Relación OneToOne con Users
    @OneToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
