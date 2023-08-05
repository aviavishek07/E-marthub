package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserServiceDao{
    @Autowired
    UserRepository repository;

    @Override
    public User registerUser(User user) {
        return repository.save(user);
    }

    @Override
    public boolean validateUser(User user){
        User user1 = repository.findByMailIdAndPassword(user.getMailId(), user.getPassword());
        return user1 != null;
    }
}

