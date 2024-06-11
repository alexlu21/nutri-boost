package com.alexlu.sbrdemo.service;

import com.alexlu.sbrdemo.model.Sugerencia;
import com.alexlu.sbrdemo.repository.SugerenciaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class SugerenciaService implements  ISugerenciaService{

    @Autowired
    SugerenciaRepository sugerenciaRepository;

    @Override
    public Sugerencia addSugerencia(Sugerencia sugerencia){
        return sugerenciaRepository.save(sugerencia);
    }
    @Override
    public List<Sugerencia> getSugerencias(){
        return sugerenciaRepository.findAll();
    }
    @Override
    public Sugerencia getSugerenciaById(long id){
        return sugerenciaRepository.findById(id).orElse(null);
    }
    @Override
    public Sugerencia editSugerencia(Sugerencia sugerencia, long id){
        return sugerenciaRepository.findById(id).map(s ->{
            s.setEmail(sugerencia.getEmail());
            s.setTelefono(sugerencia.getTelefono());
            s.setMotivo(sugerencia.getMotivo());
            s.setMensaje(sugerencia.getMensaje());
            return sugerenciaRepository.save(s);
        }).orElse(null);
    }
    @Override
    public void deleteSugerencia(long id){
        sugerenciaRepository.deleteById(id);
    }

}
