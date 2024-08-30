package com.todo.list.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.config.Task;

import java.util.UUID;

public interface ITasksRepository extends JpaRepository<Task, UUID> {
}
