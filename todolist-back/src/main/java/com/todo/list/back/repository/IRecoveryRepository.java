package com.todo.list.back.repository;

import com.todo.list.back.model.Recovery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IRecoveryRepository extends JpaRepository<Recovery, UUID> {

}
