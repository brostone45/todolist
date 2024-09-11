package com.todo.list.back.controller;

import com.todo.list.back.model.Categories;
import com.todo.list.back.model.Tasks;
import com.todo.list.back.model.Users;
import com.todo.list.back.service.ITasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/tasks")
public class TaskController {


    @Autowired
    private ITasksService tasksService;

    @PostMapping("/save")
    public String templateTask(Tasks task) {
        Users user = new Users();
        Categories categories = new Categories();
        task.setCategory(categories);
        task.setUser(user);
        tasksService.save(task);
        return "redirect:/users";
    }
}
