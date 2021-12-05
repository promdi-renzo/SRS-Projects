package com.bdayreminder.api.services.impl;

import com.bdayreminder.api.entities.Bday;
import com.bdayreminder.api.repository.BdayRepository;
import com.bdayreminder.api.services.BdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BdayServiceImpl implements BdayService {

    @Autowired
    private BdayRepository repository;

    @Override
    public List<Bday> getAllBday() {
        return repository.findAll();
    }

    @Override
    public void addBday(Bday bday) {
        bday.setId(0);
        repository.save(bday);
    }
}
