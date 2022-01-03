package com.example.demo.controllers;

import com.example.demo.entities.Message;
import com.example.demo.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<Message> getAllMessage(){
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable int id){
        return messageService.getMessageById(id);
    }

    @PostMapping
    public String addMessage(@RequestBody Message msg){
        messageService.addMessage(msg);
        return "Add Success";
    }

    @PatchMapping("/{id}")
    public String updateMessage(@PathVariable int id, @RequestBody Message msg){
        messageService.updateMessage(id, msg);
        return "Update Success";
    }

    @DeleteMapping("/{id}")
    public String deleteMessage(@PathVariable int id){
        messageService.deleteMessage(id);
        return "Delete Success";
    }

}
