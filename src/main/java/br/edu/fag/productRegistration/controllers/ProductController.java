package br.edu.fag.productRegistration.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

@Data
@RestController
@RequestMapping
public class ProductController {

    @GetMapping
    public void getAll() {

    }
}
