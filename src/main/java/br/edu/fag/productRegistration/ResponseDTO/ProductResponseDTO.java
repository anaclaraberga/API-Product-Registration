package br.edu.fag.productRegistration.ResponseDTO;

import java.math.BigDecimal;

import br.edu.fag.productRegistration.entities.ProductEntity;

public record ProductResponseDTO(Long id, String title, String image, BigDecimal price){
    
    public ProductResponseDTO(ProductEntity productEntity) {
        this(productEntity.getId(), productEntity.getTitle(), productEntity.getImage(), productEntity.getPrice());
    }
}
