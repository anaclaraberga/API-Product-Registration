package br.edu.fag.productRegistration.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fag.productRegistration.RequestDTO.ProductRequestDTO;
import br.edu.fag.productRegistration.ResponseDTO.ProductResponseDTO;
import br.edu.fag.productRegistration.entities.ProductEntity;
import br.edu.fag.productRegistration.repository.ProductRepository;
import lombok.Data;

@Data
@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
    public ProductEntity createProduct(@RequestBody ProductRequestDTO dto) {
        ProductEntity product = new ProductEntity(dto);

        return repository.save(product);
    }

    @GetMapping
    public List<ProductResponseDTO> getAll() {

        List<ProductResponseDTO> product = repository.findAll().stream().map(ProductResponseDTO::new).toList();

        return product;
    }
}
