package com.usermanagement.demo.services;

import com.usermanagement.demo.entities.User;

import java.util.List;

public interface UserService {

    List<User> getAllUser();
    User getUserById(long id);
    void addUser(User user);
    void updateUser(User user);
    void deleteUserById(long id);
}
