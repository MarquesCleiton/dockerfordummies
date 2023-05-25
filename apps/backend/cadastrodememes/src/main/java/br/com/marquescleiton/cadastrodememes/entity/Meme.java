package br.com.marquescleiton.cadastrodememes.entity;

import javax.persistence.*;

@Table(name = "tb_meme")
@Entity(name = "Meme")
public class Meme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String link_foto;

    String nome;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLink_foto() {
        return link_foto;
    }

    public void setLink_foto(String link_foto) {
        this.link_foto = link_foto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
