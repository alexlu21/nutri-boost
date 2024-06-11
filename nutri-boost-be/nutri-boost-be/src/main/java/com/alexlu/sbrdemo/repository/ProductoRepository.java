package com.alexlu.sbrdemo.repository;

import com.alexlu.sbrdemo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
