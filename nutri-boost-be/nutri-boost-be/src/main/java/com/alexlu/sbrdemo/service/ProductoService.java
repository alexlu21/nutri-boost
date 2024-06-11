package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.exception.ProductoException;
import com.alexlu.sbrdemo.model.Producto;
import com.alexlu.sbrdemo.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductoService implements IProductoService {
    private final ProductoRepository productoRepository;

    @Override
    public List<Producto> getProducts() {
        return productoRepository.findAll();
    }

    @Override
    public Producto addProduct(Producto producto){
        return productoRepository.save(producto);
    }
    @Override
    public Producto updateProduct(Producto producto, Long id){
        return productoRepository.findById(id).map(p -> {
            p.setNombre(producto.getNombre());
            p.setDescripcion(producto.getDescripcion());
            p.setPrecio(producto.getPrecio());
            p.setProductImg(producto.getProductImg());
            return productoRepository.save(p);
        }).orElseThrow(() -> new ProductoException("No se ha econtrado el producto"));
    }
    @Override
    public Producto getProductById(Long id) {
        return productoRepository.findById(id)
                .orElseThrow(() -> new ProductoException("No se ha encontrado el producto con id: " +id));
    }
    @Override
    public void deleteProduct(Long id) {
        if (!productoRepository.existsById(id)){
            throw new ProductoException("Producto no encontrado");
        }
        productoRepository.deleteById(id);
    }
}
