package com.todo.list.back.service;

import com.todo.list.back.model.Recovery;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IRecoveryService {

    public Recovery save(Recovery recovery);

    public List<Recovery> findAll();

    public Optional<Recovery> findById(UUID id);
}
