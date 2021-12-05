package com.demo.tourapi;

import com.demo.tourapi.entities.Tour;
import com.demo.tourapi.services.TourService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TourApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TourApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner demoData(TourService service) {
		return args -> {
			service.addTour(new Tour(1, "Cebu City", "One of the best cities in the Philippines", 2000, "https://picsum.photos/200"));
			service.addTour(new Tour(1, "Cebu City", "One of the best cities in the Philippines", 2000, "https://picsum.photos/200"));
			service.addTour(new Tour(1, "Cebu City", "One of the best cities in the Philippines", 2000, "https://picsum.photos/200"));
			service.addTour(new Tour(1, "Cebu City", "One of the best cities in the Philippines", 2000, "https://picsum.photos/200"));
			service.addTour(new Tour(1, "Cebu City", "One of the best cities in the Philippines", 2000, "https://picsum.photos/200"));


		};
	}
}
