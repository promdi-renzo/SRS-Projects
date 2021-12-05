package com.demo.tourapi.services.impl;

import com.demo.tourapi.entities.Tour;
import com.demo.tourapi.repository.TourRepository;
import com.demo.tourapi.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourServiceImpl implements TourService {

    @Autowired
    private TourRepository tourRepository;

    @Override
    public List<Tour> getAllTour() {
        return tourRepository.findAll();
    }

    @Override
    public void deleteTourById(long id) {
        tourRepository.deleteById(id);
    }

    @Override
    public void addTour(Tour tour) {
        tour.setId(0);
        tourRepository.save(tour);
    }
}
