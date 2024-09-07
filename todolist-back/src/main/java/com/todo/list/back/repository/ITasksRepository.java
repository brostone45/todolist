package com.todo.list.back.repository;

import com.todo.list.back.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ITasksRepository extends JpaRepository<Tasks, UUID> {
}
