package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.model.Producto;

import java.util.List;

public interface IProductoService {
    Producto addProduct(Producto producto);
    List<Producto> getProducts();
    Producto updateProduct(Producto producto, Long id);
    Producto getProductById(Long id);
    void deleteProduct(Long id);
}
