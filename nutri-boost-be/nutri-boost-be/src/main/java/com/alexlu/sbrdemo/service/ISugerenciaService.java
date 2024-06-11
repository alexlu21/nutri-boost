package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.model.Sugerencia;

import java.util.List;

public interface ISugerenciaService {

    Sugerencia addSugerencia(Sugerencia sugerencia);
    List<Sugerencia> getSugerencias();
    Sugerencia getSugerenciaById(long id);
    Sugerencia editSugerencia(Sugerencia sugerencia, long id);
    void deleteSugerencia(long id);
}
