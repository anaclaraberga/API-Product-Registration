package br.edu.fag.productRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.fag.productRegistration.entities.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    
}
