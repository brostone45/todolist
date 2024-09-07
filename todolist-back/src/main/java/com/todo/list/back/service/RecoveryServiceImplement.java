package com.todo.list.back.service;

import com.todo.list.back.model.Recovery;
import com.todo.list.back.repository.IRecoveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RecoveryServiceImplement implements IRecoveryService {

    @Autowired
    private IRecoveryRepository recoveryRepository;

    @Override
    public Recovery save(Recovery recovery) {
        return recoveryRepository.save(recovery);
    }

    @Override
    public List<Recovery> findAll() {
        return recoveryRepository.findAll();
    }

    @Override
    public Optional<Recovery> findById(UUID id) {
        return recoveryRepository.findById(id);
    }
}
