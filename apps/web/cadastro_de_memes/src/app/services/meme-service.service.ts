import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from '../model/Meme';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeServiceService {
  url:string = "http://app_java:8080";
  constructor(
    private http: HttpClient
  ) {}

  getMemeByNome(nome: string): Observable<Meme[]>{
    return this.http.get<Meme[]>(this.url + "/buscar?nome=" + nome)
    .pipe(catchError(this.errorHandler))
  }

  getTodosMeme(): Observable<Meme[]>{
    return this.http.get<Meme[]>(this.url + "/buscar/todos")
    .pipe(catchError(this.errorHandler))
  }
  getPeloId(id:number): Observable<Meme>{
    return this.http.get<Meme>(this.url + "/buscar/" + id)
    .pipe(catchError(this.errorHandler))
  }
  cadastrarMeme(meme: Meme): Observable<Meme>{
    return this.http.post<Meme>(this.url + "/cadastrar", meme)
    .pipe(catchError(this.errorHandler))
  }

  atualizarMeme(meme: Meme): Observable<Meme>{
    return this.http.put<Meme>(this.url + "/atualizar", meme)
    .pipe(catchError(this.errorHandler))
  }

  excluirMeme(codigo: number): Observable<Meme>{
    return this.http.delete<Meme>(this.url + "/excluir/" + codigo)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
 }
}
