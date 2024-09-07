package com.todo.list.back.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;

    // Relación OneToMany con Tasks
    @OneToMany(mappedBy = "category")
    private Set<Tasks> tasks;
}
