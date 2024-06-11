package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.model.Producto;
import com.alexlu.sbrdemo.model.Usuario;

import java.util.List;

public interface IUsuarioService {
    public List<Usuario> getUsuarios();
    public Usuario findById(long id);
    public Usuario addUsuario (Usuario usuario);
    Usuario findByNombreUsuario(String nombreUsuario);
    public void deleteUsuario(long id);
}
