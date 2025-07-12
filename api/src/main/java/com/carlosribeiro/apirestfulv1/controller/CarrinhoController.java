package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.ItemCarrinho;
import com.carlosribeiro.apirestfulv1.service.CarrinhoService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carrinho")
@CrossOrigin(origins = "*")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    // Simula a obtenção do usuário logado
    private Long getUsuarioLogadoId() { return 1L; }

    @GetMapping
    public ResponseEntity<List<ItemCarrinho>> getCarrinho() {
        return ResponseEntity.ok(carrinhoService.getItensCarrinho(getUsuarioLogadoId()));
    }

    @PutMapping
    public ResponseEntity<Void> atualizarItem(@RequestBody ItemCarrinhoDTO itemDTO) {
        carrinhoService.atualizarItem(getUsuarioLogadoId(), itemDTO.getProdutoId(), itemDTO.getQuantidade());
        return ResponseEntity.ok().build();
    }

    // DTO para receber os dados do frontend
    @Data
    static class ItemCarrinhoDTO {
        private Long produtoId;
        private int quantidade;
    }
}