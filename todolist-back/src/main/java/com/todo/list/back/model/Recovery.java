package com.todo.list.back.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "recovery")
@Getter
@Setter
@NoArgsConstructor
public class Recovery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int recoveryCode;
}
