package com.stackroute.authenticationservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "address_details")
@Getter
@Setter

public class Address {

    @Id
    String id;
    String doorNo;
    String streetName;
    String cityName;
    String pinCode;

    @ManyToOne
    User user;
}
