package com.usermanagement.demo.controllers;


import com.usermanagement.demo.entities.User;
import com.usermanagement.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") long id){
        return userService.getUserById(id);
    }

    @PostMapping
    public String saveUser(@RequestBody User user){
        userService.addUser(user);
        return "Success";
    }

    @PutMapping("/{id}")
    public String updateuser(@PathVariable("id") long id, @RequestBody User user){
        user.setId(id);
        userService.updateUser(user);
        return "Success";
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") long id){
        userService.deleteUserById(id);
        return "Success";
    }

}
