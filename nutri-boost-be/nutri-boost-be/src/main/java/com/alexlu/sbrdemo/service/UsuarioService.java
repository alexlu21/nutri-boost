package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.model.Usuario;
import com.alexlu.sbrdemo.repository.UsuarioRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService implements IUsuarioService{

    @Autowired
    UsuarioRespository usuarioRespository;

    @Override
    public List<Usuario> getUsuarios(){
        return usuarioRespository.findAll();
    }

    @Override
    public Usuario findById(long id){
        return usuarioRespository.findById(id).orElse(null);
    }

    @Override
    public Usuario addUsuario(Usuario usuario){
        return usuarioRespository.save(usuario);
    }

    @Override
    public Usuario findByNombreUsuario(String nombreUsuario) {
        return usuarioRespository.findByNombreUsuario(nombreUsuario);
    }

    public void deleteUsuario(long id){
        usuarioRespository.deleteById(id);
    }
}
