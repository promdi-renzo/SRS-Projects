package com.bdayreminder.api.controllers;


import com.bdayreminder.api.entities.Bday;
import com.bdayreminder.api.services.BdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Bday getBday(@PathVariable("id") long id){
        return service.getBdayById(id);
    }

    @PostMapping
    public Bday getBday(@RequestBody Bday bday){
        service.addBday(bday);
        return bday;
    }

    @PatchMapping
    public Bday updateBday(@RequestBody Bday bday){
        service.updateBday(bday);
        return bday;
    }

    @DeleteMapping("/{id}")
    public String deleteBday(@PathVariable("id") long id){
        service.deleteBdayById(id);
        return "Successfully deleted";
    }
}
