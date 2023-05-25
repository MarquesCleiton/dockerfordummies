export class Meme{
    id: number | null;
    link_foto:string | null;
    nome:string | null;
    constructor(id: number | null, link_foto:string | null, nome:string | null){
        this.id = id;
        this.link_foto = link_foto;
        this.nome = nome;
    }
}