import { Component } from '@angular/core';
import { MemeServiceService } from '../services/meme-service.service';
import { Meme } from '../model/Meme';

@Component({
  selector: 'app-cadastro-memes',
  templateUrl: './cadastro-memes.component.html',
  styleUrls: ['./cadastro-memes.component.css']
})
export class CadastroMemesComponent {

  todosOsMemes: Meme[] | null = null;

  cadastroMeme: Meme;

  nome: string = ""


  constructor(private memeService: MemeServiceService) {
    this.cadastroMeme = new Meme(null, null, null);
  }

  ngOnInit(): void {
    this.getTodosOsMemes();
  }

  getTodosOsMemes() {
    return this.memeService.getTodosMeme().subscribe((memes) => {
      console.log(memes)
      this.todosOsMemes = memes;
    })
  }

  cadastrar() {
    if (this.cadastroMeme.id != null) {
      this.atualizar();
    } else {
      this.memeService.cadastrarMeme(this.cadastroMeme).subscribe({
        next: (meme) => {
          console.log(this.cadastroMeme);
          alert("Meme cadastrado com sucesso!")
          this.cadastroMeme = meme;
          this.getTodosOsMemes();
        },
        error: (erro) => {
          alert("Deu ruim no cadastro")
        }
      })
    }
  }

  atualizar() {
    this.memeService.atualizarMeme(this.cadastroMeme).subscribe({
      next: (meme) => {
        console.log(this.cadastroMeme);
        alert("Definições de meme atualizado com sucesso!")
        this.getTodosOsMemes();
      },
      error: (erro) => {
        alert("Deu ruim no cadastro")
      }
    })
  }

  excluir() {
    if(this.cadastroMeme.id != null)
    this.memeService.excluirMeme(this.cadastroMeme.id).subscribe({
      next: (meme) => {
        console.log(this.cadastroMeme);
        alert("Meme expurgado!")
        this.getTodosOsMemes();
      },
      error: (erro) => {
        alert("Deu ruim!")
      }
    })
  }

  editar(codigo: number | null) {
    if (codigo != null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.memeService.getPeloId(codigo).subscribe({
        next: (meme) => {
          this.cadastroMeme = meme;
        },
        error: (erro) => {
          alert("Deu ruim!")
        }
      })
    }
  }
  limpar(){
    this.cadastroMeme = new Meme(null, null, null);
  }
}


