package br.edu.fag.productRegistration.ResponseDTO;

import br.edu.fag.productRegistration.entities.ProductEntity;

public record ProductResponseDTO(Long id, String title, String image, Integer price){
    
    public ProductResponseDTO(ProductEntity productEntity) {
        this(productEntity.getId(), productEntity.getTitle(), productEntity.getImage(), productEntity.getPrice());
    }
}
