package com.example.demo.services.impl;

import com.example.demo.entities.Message;
import com.example.demo.repositories.MessageRepository;
import com.example.demo.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public Message getMessageById(int id) {
        Optional<Message> tempMsg = messageRepository.findById(id);
        return tempMsg.isPresent() ? tempMsg.get() : null;
    }

    @Override
    public void addMessage(Message msg) {
        msg.setId(0);
        messageRepository.save(msg);
    }

    @Override
    public void updateMessage(int id, Message msg) {
        msg.setId(id);
        messageRepository.save(msg);
    }

    @Override
    public void deleteMessage(int id) {
        messageRepository.deleteById(id);
    }
}
