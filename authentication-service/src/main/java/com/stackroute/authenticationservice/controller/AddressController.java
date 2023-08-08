package com.stackroute.authenticationservice.controller;


import com.stackroute.authenticationservice.model.Address;
import com.stackroute.authenticationservice.service.AddressServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("address")
@CrossOrigin("*")
public class AddressController {
    @Autowired
    AddressServiceImpl service;

    @PostMapping("addaddress")
    public ResponseEntity<?> addAddress(@RequestBody Address address){
        return new ResponseEntity<Address>(service.addAddress(address),HttpStatus.CREATED);
    }

    @GetMapping("viewall")
    public ResponseEntity<?> getAllAddresses(){
        List<Address> addressList = service.getAllAddresses();
        return new ResponseEntity<List>(addressList, HttpStatus.OK);
    }
}
