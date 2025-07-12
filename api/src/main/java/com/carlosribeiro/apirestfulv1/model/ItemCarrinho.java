package com.carlosribeiro.apirestfulv1.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "itens_carrinho", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"usuario_id", "produto_id"})
})
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produto produto;

    @Column(nullable = false)
    private int quantidade;

    public ItemCarrinho(Usuario usuario, Produto produto, int quantidade) {
        this.usuario = usuario;
        this.produto = produto;
        this.quantidade = quantidade;
    }
}