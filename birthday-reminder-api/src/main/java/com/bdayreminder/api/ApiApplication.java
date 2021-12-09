package com.bdayreminder.api;

import com.bdayreminder.api.entities.Bday;
import com.bdayreminder.api.repository.BdayRepository;
import com.bdayreminder.api.services.BdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiApplication {

	@Autowired
	private BdayService service;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	 @Bean
	 public CommandLineRunner demoData(BdayRepository repo) {
		 return args -> {

		 repo.save(new Bday(0, "Renzo", "Cabarios", 21, "https://picsum.photos/200"));
		 repo.save(new Bday(0, "Renzo", "Cabarios", 21, "https://picsum.photos/200"));
		 repo.save(new Bday(0, "Renzo", "Cabarios", 21, "https://picsum.photos/200"));
		 repo.save(new Bday(0, "Renzo", "Cabarios", 21, "https://picsum.photos/200"));
		 repo.save(new Bday(0, "Renzo", "Cabarios", 21, "https://picsum.photos/200"));

		 };
	 }

}
