package br.edu.fag.productRegistration.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fag.productRegistration.entities.ProductEntity;
import br.edu.fag.productRegistration.repository.ProductRepository;
import lombok.Data;

@Data
@RestController
@RequestMapping("/home")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    public List<ProductEntity> getAll() {

        List<ProductEntity> product = repository.findAll();

        return product;
    }
}
