package com.carlosribeiro.apirestfulv1.service;

import com.carlosribeiro.apirestfulv1.model.Favorito;
import com.carlosribeiro.apirestfulv1.model.Produto;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.repository.FavoritoRepository;
import com.carlosribeiro.apirestfulv1.repository.ProdutoRepository;
import com.carlosribeiro.apirestfulv1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FavoritoService {

    @Autowired
    private FavoritoRepository favoritoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository; // Supondo que exista

    @Autowired
    private ProdutoRepository produtoRepository; // Supondo que exista

    public List<Produto> getFavoritosByUsuario(Long usuarioId) {
        return favoritoRepository.findProdutosByUsuarioId(usuarioId);
    }

    @Transactional
    public Favorito addFavorito(Long usuarioId, Long produtoId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        Produto produto = produtoRepository.findById(produtoId).orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        // Verifica se já não é um favorito para evitar erro de constraint
        if (favoritoRepository.findByUsuarioIdAndProdutoId(usuarioId, produtoId).isPresent()) {
            throw new RuntimeException("Produto já favoritado.");
        }

        Favorito novoFavorito = new Favorito(usuario, produto);
        return favoritoRepository.save(novoFavorito);
    }

    @Transactional
    public void removeFavorito(Long usuarioId, Long produtoId) {
        if (!favoritoRepository.findByUsuarioIdAndProdutoId(usuarioId, produtoId).isPresent()) {
            throw new RuntimeException("Favorito não encontrado para ser removido.");
        }
        favoritoRepository.deleteByUsuarioIdAndProdutoId(usuarioId, produtoId);
    }
}