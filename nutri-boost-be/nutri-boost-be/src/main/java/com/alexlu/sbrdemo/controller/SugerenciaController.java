package com.alexlu.sbrdemo.controller;

import com.alexlu.sbrdemo.model.Sugerencia;
import com.alexlu.sbrdemo.service.ISugerenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/sugerencias")
public class SugerenciaController {

    @Autowired
    private ISugerenciaService sugerenciaService;

    @PostMapping("/add")
    public ResponseEntity<Sugerencia> addSugerencia(@RequestBody Sugerencia sugerencia) {
        Sugerencia nuevaSugerencia = sugerenciaService.addSugerencia(sugerencia);
        return new ResponseEntity<>(nuevaSugerencia, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Sugerencia>> getAllSugerencias() {
        List<Sugerencia> sugerencias = sugerenciaService.getSugerencias();
        return new ResponseEntity<>(sugerencias, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sugerencia> getSugerenciaById(@PathVariable long id) {
        Sugerencia sugerencia = sugerenciaService.getSugerenciaById(id);
        if (sugerencia != null) {
            return new ResponseEntity<>(sugerencia, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Sugerencia> editSugerencia(@PathVariable long id, @RequestBody Sugerencia sugerencia) {
        Sugerencia updatedSugerencia = sugerenciaService.editSugerencia(sugerencia, id);
        if (updatedSugerencia != null) {
            return new ResponseEntity<>(updatedSugerencia, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSugerencia(@PathVariable long id) {
        sugerenciaService.deleteSugerencia(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
