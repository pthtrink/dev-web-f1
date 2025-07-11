package com.carlosribeiro.apirestfulv1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.service.UsuarioService;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("usuario")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.cadastrarUsuario(usuario);
    }

    @GetMapping("{idUsuario}")
    public Usuario recuperarUsuarioPorId(@PathVariable("idUsuario") long id) {
        return usuarioService.recuperarUsuarioPorId(id);
    }
}
