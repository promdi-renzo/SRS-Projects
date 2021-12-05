package com.demo.tourapi.services;

import com.demo.tourapi.entities.Tour;

import java.util.List;

public interface TourService {
    List<Tour> getAllTour();
    void deleteTourById(long id);
    void addTour(Tour tour);
}
