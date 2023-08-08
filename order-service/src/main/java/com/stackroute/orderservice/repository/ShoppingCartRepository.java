package com.stackroute.orderservice.repository;


import com.stackroute.orderservice.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart,Integer> {

}
