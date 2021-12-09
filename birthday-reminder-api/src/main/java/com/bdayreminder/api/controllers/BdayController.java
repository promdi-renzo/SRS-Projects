package com.bdayreminder.api.controllers;


import com.bdayreminder.api.entities.Bday;
import com.bdayreminder.api.services.BdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/bday")
@RestController
@CrossOrigin("*")
public class BdayController {

    @Autowired
    private BdayService service;

    @GetMapping
    public List<Bday> getAllBday(){
        return service.getAllBday();
    }
}
