package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.model.ItemCarrinho;
import com.carlosribeiro.apirestfulv1.model.Produto;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.repository.ItemCarrinhoRepository;
import com.carlosribeiro.apirestfulv1.repository.ProdutoRepository;
import com.carlosribeiro.apirestfulv1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CarrinhoService {

    @Autowired private ItemCarrinhoRepository itemCarrinhoRepository;
    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private ProdutoRepository produtoRepository;

    public List<ItemCarrinho> getItensCarrinho(Long usuarioId) {
        return itemCarrinhoRepository.findByUsuarioId(usuarioId);
    }

    @Transactional
    public void atualizarItem(Long usuarioId, Long produtoId, int novaQuantidade) {
        if (novaQuantidade <= 0) {
            itemCarrinhoRepository.findByUsuarioIdAndProdutoId(usuarioId, produtoId)
                    .ifPresent(item -> itemCarrinhoRepository.delete(item));
            return;
        }

        Optional<ItemCarrinho> itemExistente = itemCarrinhoRepository.findByUsuarioIdAndProdutoId(usuarioId, produtoId);

        if (itemExistente.isPresent()) {
            ItemCarrinho item = itemExistente.get();
            item.setQuantidade(novaQuantidade);
            itemCarrinhoRepository.save(item);
        } else {
            Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
            Produto produto = produtoRepository.findById(produtoId).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
            ItemCarrinho novoItem = new ItemCarrinho(usuario, produto, novaQuantidade);
            itemCarrinhoRepository.save(novoItem);
        }
    }
}