package com.bdayreminder.api.services.impl;

import com.bdayreminder.api.entities.Bday;
import com.bdayreminder.api.repository.BdayRepository;
import com.bdayreminder.api.services.BdayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BdayServiceImpl implements BdayService {

    @Autowired
    private BdayRepository repository;

    @Override
    public List<Bday> getAllBday() {
        return repository.findAll();
    }

    @Override
    public Bday getBdayById(long id) {

        Optional<Bday> tempBday = repository.findById(id);
        Bday bday = null;

        if(tempBday.isPresent()){
            bday = tempBday.get();
        }

        return bday;
    }

    @Override
    public void addBday(Bday bday) {
        bday.setId(0);
        repository.save(bday);
    }

    @Override
    public void updateBday(Bday bday) {
        repository.save(bday);
    }


}
