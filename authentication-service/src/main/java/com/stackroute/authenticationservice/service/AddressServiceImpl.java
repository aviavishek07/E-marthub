package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.model.Address;
import com.stackroute.authenticationservice.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressServiceDao{
    @Autowired
    AddressRepository repository;

    @Override
    public Address addAddress(Address address) {
        return repository.save(address);
    }

    @Override
    public List<Address> getAllAddresses() {
        return repository.findAll();
    }
}
