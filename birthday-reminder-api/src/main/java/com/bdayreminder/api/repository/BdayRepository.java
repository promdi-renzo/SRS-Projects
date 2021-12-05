package com.bdayreminder.api.repository;

import com.bdayreminder.api.entities.Bday;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BdayRepository extends JpaRepository<Bday, Long> {
}
