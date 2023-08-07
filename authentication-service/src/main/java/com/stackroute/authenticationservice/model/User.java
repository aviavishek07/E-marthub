package com.stackroute.authenticationservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
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

}
