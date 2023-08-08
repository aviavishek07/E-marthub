package com.stackroute.authenticationservice.service;

import com.stackroute.authenticationservice.exception.UserAlreadyExistsException;
import com.stackroute.authenticationservice.exception.UserNotFoundException;
import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImpl implements UserServiceDao{
    @Autowired
    UserRepository repository;

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException{
        Optional<User> optionalUser = repository.findById(user.getMailId());
        if(optionalUser.isEmpty()){
            User user1 = repository.save(user);
            return user1;
        }
        else {
            throw new UserAlreadyExistsException();
        }
//        return repository.save(user);
    }

    @Override
    public boolean validateUser(User user) throws UserNotFoundException {
        Optional<User> user1 = Optional.ofNullable(repository.findByMailIdAndPassword(user.getMailId(), user.getPassword()));
        if (user1.isEmpty()){
            return false;
        }
        else {
            return true;
        }
    }
}

