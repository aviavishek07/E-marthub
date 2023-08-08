package com.stackroute.authenticationservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "user_details")
@Getter
@Setter
public class User {
    String firstName;
    String lastName;
    @Id
    String mailId;
    String password;
    String mobileNo;
    String role;

    @OneToMany
     List<Address> addressList;


}
