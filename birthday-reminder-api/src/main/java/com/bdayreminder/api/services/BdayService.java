package com.bdayreminder.api.services;

import com.bdayreminder.api.entities.Bday;

import java.util.List;

public interface BdayService {

    List<Bday> getAllBday();
    Bday getBdayById(long id);
    void addBday(Bday bday);

}
