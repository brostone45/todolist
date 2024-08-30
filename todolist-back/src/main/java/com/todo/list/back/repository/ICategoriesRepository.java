package com.todo.list.back.repository;

import com.todo.list.back.model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ICategoriesRepository extends JpaRepository<Categories, UUID> {

}
