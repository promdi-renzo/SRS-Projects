package com.usermanagement.demo.services.impl;

import com.usermanagement.demo.entities.User;
import com.usermanagement.demo.repository.UserRepository;
import com.usermanagement.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(long id) {
        Optional<User> tempUser = userRepository.findById(id);
        User user = null;

        if(tempUser.isPresent()){
            user = tempUser.get();
        }

        return user;
    }

    @Override
    public void addUser(User user) {
        user.setId(0);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(long id) {
        userRepository.deleteById(id);
    }
}
