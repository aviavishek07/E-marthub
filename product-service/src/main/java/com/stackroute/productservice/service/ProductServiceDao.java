package com.stackroute.productservice.service;

import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductIdNotFoundException;
import com.stackroute.productservice.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductServiceDao {
    public Product addProduct(Product product) throws ProductAlreadyExistException;
    public List<Product> viewall();

    Product getProductByProductId(String productId) throws ProductIdNotFoundException;

    public List<Product> getProductsByCategory(String productCategory);
    public List<Product> getProductsBySubCategory(String productSubCategory);
    public List<Product> getProductsGreaterThanPrice(int price);
    public List<Product> getProductByProductCategoryOrderByPrice(String name);
}
