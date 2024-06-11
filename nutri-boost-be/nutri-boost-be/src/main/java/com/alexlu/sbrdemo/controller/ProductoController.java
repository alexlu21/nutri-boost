package com.alexlu.sbrdemo.controller;

import com.alexlu.sbrdemo.model.Producto;
import com.alexlu.sbrdemo.service.IProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")// MIRAR A VER QUE PUERTO TENGO EN FRONT-END
@RestController
@RequestMapping("/producto")
@RequiredArgsConstructor
public class ProductoController {
    private final IProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> getProducts(){
        return new ResponseEntity<>(productoService.getProducts(), HttpStatus.FOUND);
    }
    @PostMapping
    public Producto addProduct(@RequestBody Producto producto){
        return productoService.addProduct(producto);
    }
        @PutMapping("/update/{id}")
    public Producto updateProduct(@RequestBody Producto producto, @PathVariable Long id){
        return productoService.updateProduct(producto,id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        productoService.deleteProduct(id);
    }
    @GetMapping("/producto/{id}")
    public Producto getProductById(@PathVariable Long id){
        return productoService.getProductById(id);
    }
}
