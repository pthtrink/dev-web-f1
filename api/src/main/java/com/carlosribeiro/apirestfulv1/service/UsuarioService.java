package com.carlosribeiro.apirestfulv1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carlosribeiro.apirestfulv1.exception.ContaJaExisteException;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {
        if (usuarioRepository.findByConta(usuario.getConta()) != null) {
            throw new ContaJaExisteException("Esta conta já está cadastrada.");
        }
        return usuarioRepository.save(usuario);
    }
    
    public Usuario recuperarUsuarioPorId(long id) {
        return usuarioRepository.findById(id).orElse(null);
    }
}
