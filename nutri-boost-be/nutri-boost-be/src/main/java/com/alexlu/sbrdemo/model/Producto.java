package com.alexlu.sbrdemo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduct;
    private String productName;
    private String productDesc;
    private Double productPrice;
    private String productImg;


    public Long getId() {
        return idProduct;
    }

    public void setId(Long id) {
        this.idProduct = id;
    }

    public String getNombre() {
        return productName;
    }

    public void setNombre(String nombre) {
        this.productName = nombre;
    }

    public String getDescripcion() {
        return productDesc;
    }

    public void setDescripcion(String descripcion) {
        this.productDesc = descripcion;
    }

    public Double getPrecio() {
        return productPrice;
    }

    public void setPrecio(Double precio) {
        this.productPrice = precio;
    }

    public String getProductImg() {
        return productImg;
    }

    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }
}
