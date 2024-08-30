package com.todo.list.back.service;

import com.todo.list.back.model.Categories;
import com.todo.list.back.repository.ICategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoriesServiceImplement implements ICategoriesService {

    @Autowired
    private ICategoriesRepository categoriesRepository;

    @Override
    public Categories save(Categories categories) {
        return categoriesRepository.save(categories);
    }

    @Override
    public List<Categories> findAll() {
        return categoriesRepository.findAll();
    }

    @Override
    public Optional<Categories> findById(UUID id) {
        return categoriesRepository.findById(id);
    }
}
