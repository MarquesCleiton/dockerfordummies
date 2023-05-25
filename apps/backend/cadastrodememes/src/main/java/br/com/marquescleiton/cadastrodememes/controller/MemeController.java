package br.com.marquescleiton.cadastrodememes.controller;

import br.com.marquescleiton.cadastrodememes.entity.Meme;
import br.com.marquescleiton.cadastrodememes.repository.MemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController("meme")
@CrossOrigin("*")
public class MemeController {

    @Autowired
    MemeRepository repository;
    @PostMapping("cadastrar")
    ResponseEntity cadastrar(@RequestBody Meme meme){
        return ResponseEntity.ok(repository.save(meme));
    }

    @PutMapping("atualizar")
    ResponseEntity atualizar(@RequestBody Meme meme){
        Meme m = null;
        try{
            m = repository.getReferenceById(meme.getId());
        }catch (EntityNotFoundException ex){
            return ResponseEntity.notFound().build();
        }

        m.setNome(meme.getNome());
        m.setLink_foto(meme.getLink_foto());

        return ResponseEntity.ok(repository.save(m));
    }

    @DeleteMapping("excluir/{id}")
    void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }

    @GetMapping("buscar")
    ResponseEntity buscar(@RequestParam("nome") String nome){
        System.out.println(nome);
        List<Meme> memes = repository.findByNomeContaining(nome);
        return ResponseEntity.ok(memes);
    }
    @GetMapping("buscar/todos")
    ResponseEntity buscarTodos(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("buscar/{id}")
    ResponseEntity buscarPeloId(@PathVariable Long id){
        return ResponseEntity.ok(repository.findById(id));
    }
}
