package com.carlosribeiro.apirestfulv1.controller;

import com.carlosribeiro.apirestfulv1.model.Produto;
import com.carlosribeiro.apirestfulv1.service.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

    // Assumindo que o ID do usuário virá de um contexto de segurança.
    // Para simplificar, vamos recebê-lo como parâmetro por enquanto.
    private Long getUsuarioLogadoId() {
        // Em um app real, isso viria do Spring Security Context
        // Ex: SecurityContextHolder.getContext().getAuthentication()...
        return 1L; // ID do usuário "Admin" para teste
    }

    @GetMapping
    public ResponseEntity<List<Produto>> getMeusFavoritos() {
        List<Produto> favoritos = favoritoService.getFavoritosByUsuario(getUsuarioLogadoId());
        return ResponseEntity.ok(favoritos);
    }

    @PostMapping
    public ResponseEntity<Void> addFavorito(@RequestBody Map<String, Long> payload) {
        Long produtoId = payload.get("produtoId");
        favoritoService.addFavorito(getUsuarioLogadoId(), produtoId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{produtoId}")
    public ResponseEntity<Void> removeFavorito(@PathVariable Long produtoId) {
        favoritoService.removeFavorito(getUsuarioLogadoId(), produtoId);
        return ResponseEntity.noContent().build();
    }
}