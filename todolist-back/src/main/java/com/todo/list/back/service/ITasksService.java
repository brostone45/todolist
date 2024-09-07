package com.todo.list.back.service;

import com.todo.list.back.model.Tasks;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ITasksService {

    Tasks save(Tasks tasks);

    public List<Tasks> findAll();

    public Optional<Tasks> findById(UUID id);
}
