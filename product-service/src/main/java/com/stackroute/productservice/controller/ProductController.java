package com.stackroute.productservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductIdNotFoundException;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.service.ProductServiceDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    ProductServiceDaoImpl service;

    @PostMapping("add")
    public ResponseEntity<?> addProduct(@RequestParam("file") MultipartFile file,
                                        @RequestParam("product") String product) throws ProductAlreadyExistException {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Product product1 = objectMapper.readValue(product, Product.class);
            product1.setProductImage(file.getBytes());

            Product savedProduct = service.addProduct(product1);

            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("viewall")
    public ResponseEntity<?>  viewall(){
        List<Product> list= service.viewall();
        return  new ResponseEntity<List>(list,HttpStatus.OK);
    }


    @GetMapping("getProductsByCategory/{category}")
    public ResponseEntity<?> getProductsByCategory(@PathVariable String category){
        List<Product> list= service.getProductsByCategory(category);
        return  new ResponseEntity<List>(list,HttpStatus.OK);
    }
    @GetMapping("getProductsBySubCategory/{subCategory}")
    public ResponseEntity<?> getProductsBySubCategory(@PathVariable String subCategory){
        List<Product> list= service.getProductsBySubCategory(subCategory);
        return  new ResponseEntity<List>(list,HttpStatus.OK);
    }

    @GetMapping("getProductsGraterThan/{price}")
    public ResponseEntity<?> getPriceGreaterThan(@PathVariable int price){
        List<Product> list=service.getProductsGreaterThanPrice(price);
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @GetMapping("viewByProductCategoryOrderByPrice/{productCategory}")
    public ResponseEntity<?> viewByProductCategoryOrderByPrice(@PathVariable("productCategory") String productCategory){
        List<Product> list=service.getProductByProductCategoryOrderByPrice(productCategory);
        return new ResponseEntity<List>(list,HttpStatus.OK);
    }


    @GetMapping("viewByproductId/{productId}")
    public ResponseEntity<?> viewByProductId(@PathVariable String productId) {
        try{
            Product product=service.getProductByProductId(productId);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        }catch(ProductIdNotFoundException e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
        }


    }



}
