package com.bdayreminder.api.services;

import com.bdayreminder.api.entities.Bday;

import java.util.List;

public interface BdayService {

    List<Bday> getAllBday();
    void addBday(Bday bday);
}
