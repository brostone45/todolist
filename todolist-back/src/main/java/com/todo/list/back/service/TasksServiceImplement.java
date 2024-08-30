package com.todo.list.back.service;

import com.todo.list.back.model.Tasks;
import com.todo.list.back.repository.ITasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TasksServiceImplement implements ITasksService {

    @Autowired
    private ITasksRepository tasksRepository;

    @Override
    public Tasks save(Tasks tasks) {
        return tasksRepository.save(tasks);
    }

    @Override
    public List<Tasks> findAll() {
        return tasksRepository.findAll();
    }

    @Override
    public Optional<Tasks> findById(UUID id) {
        return tasksRepository.findById(id);
    }
}
