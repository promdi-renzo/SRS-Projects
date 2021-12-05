package com.demo.tourapi.controllers;


import com.demo.tourapi.entities.Tour;
import com.demo.tourapi.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RequestMapping("/api/tour")
@RestController
public class TourController {

    @Autowired
    private TourService tourService;

    @GetMapping()
    public List<Tour> getAllTour(){
        return tourService.getAllTour();
    }

    @DeleteMapping("/:id")
    public String deleteIdByTour(@PathVariable("id") long id){
        tourService.deleteTourById(id);
        return "Successfully deleted";
    }
}
