package com.todo.list.back.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String description;
    private LocalDateTime time;
    private String state;
    private boolean disable;

    // Relación ManyToOne con Users
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    // Relación ManyToOne con Categories
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Categories category;
}
