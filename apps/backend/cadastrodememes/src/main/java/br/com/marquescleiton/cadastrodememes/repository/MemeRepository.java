package br.com.marquescleiton.cadastrodememes.repository;

import br.com.marquescleiton.cadastrodememes.entity.Meme;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemeRepository extends JpaRepository<Meme, Long> {
    List<Meme> findByNomeContaining(String nome);
}
