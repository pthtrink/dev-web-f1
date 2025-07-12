package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.ItemCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemCarrinhoRepository extends JpaRepository<ItemCarrinho, Long> {
    List<ItemCarrinho> findByUsuarioId(Long usuarioId);
    Optional<ItemCarrinho> findByUsuarioIdAndProdutoId(Long usuarioId, Long produtoId);
}