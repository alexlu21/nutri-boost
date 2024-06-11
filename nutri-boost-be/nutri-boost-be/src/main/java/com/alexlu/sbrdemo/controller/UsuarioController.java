package com.alexlu.sbrdemo.controller;

import com.alexlu.sbrdemo.model.Producto;
import com.alexlu.sbrdemo.model.Usuario;
import com.alexlu.sbrdemo.service.IUsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
// MIRAR A VER QUE PUERTO TENGO EN FRONT-END
@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {
    private final IUsuarioService iUsuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsuarios(){
        return new ResponseEntity<>(iUsuarioService.getUsuarios(), HttpStatus.FOUND);
    }
    @PostMapping("/add")
    public Usuario addUsuario(@RequestBody Usuario usuario){
        return iUsuarioService.addUsuario(usuario);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario usuario) {
        Usuario usuarioEncontrado = iUsuarioService.findByNombreUsuario(usuario.getNombreUsuario());
        if (usuarioEncontrado != null && usuarioEncontrado.getContrasena().equals(usuario.getContrasena())) {
            return ResponseEntity.ok("Inicio de sesión exitoso"); // Aquí podrías devolver más detalles del usuario si lo deseas
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nombre de usuario o contraseña incorrectos");
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUsuario(@PathVariable Long id){
        iUsuarioService.deleteUsuario(id);
    }
}
