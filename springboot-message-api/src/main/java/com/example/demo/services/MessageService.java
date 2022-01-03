package com.example.demo.services;

import com.example.demo.entities.Message;

import java.util.List;

public interface MessageService {
    List<Message> getAllMessages();
    Message getMessageById(int id);
    void addMessage(Message msg);
    void updateMessage(int id, Message msg);
    void deleteMessage(int id);
}
