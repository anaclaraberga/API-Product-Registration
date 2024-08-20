package br.edu.fag.productRegistration.RequestDTO;

import java.math.BigDecimal;

public record ProductRequestDTO(String title, String image, BigDecimal price) {
    
}
