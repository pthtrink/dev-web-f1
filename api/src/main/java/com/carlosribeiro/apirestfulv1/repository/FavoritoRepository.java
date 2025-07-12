package com.carlosribeiro.apirestfulv1.repository;

import com.carlosribeiro.apirestfulv1.model.Favorito;
import com.carlosribeiro.apirestfulv1.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {

    // Encontra todos os produtos favoritos de um usuário
    @Query("SELECT f.produto FROM Favorito f WHERE f.usuario.id = :usuarioId")
    List<Produto> findProdutosByUsuarioId(@Param("usuarioId") Long usuarioId);

    // Encontra um favorito específico por usuário e produto
    Optional<Favorito> findByUsuarioIdAndProdutoId(Long usuarioId, Long produtoId);

    // Deleta um favorito por usuário e produto
    @Transactional
    void deleteByUsuarioIdAndProdutoId(Long usuarioId, Long produtoId);

    // Deleta todos os favoritos de um produto (usado quando o produto é excluído)
    @Modifying
    @Transactional
    @Query("DELETE FROM Favorito f WHERE f.produto.id = :produtoId")
    void deleteByProdutoId(@Param("produtoId") Long produtoId);
}