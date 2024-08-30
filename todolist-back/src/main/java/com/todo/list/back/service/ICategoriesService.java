package com.todo.list.back.service;

import com.todo.list.back.model.Categories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ICategoriesService {

    public Categories save(Categories categories);

    public List<Categories> findAll();

    public Optional<Categories> findById(UUID id);

}
