package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.model.User;

public interface UserServiceDao {

    //service for registering new user
    User registerUser(User user);

    //service for validating the user
    boolean validateUser(User user);
}
