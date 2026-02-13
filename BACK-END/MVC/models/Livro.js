class Livro {
    
    constructor(id, titulo, autor, paginas){
            if (!titulo || !autor){
                throw new Error("Todos os campos devem ser preenchidos");
            }
            this.id = id;
            this.titulo = titulo;
            this.autor = autor;
            this.paginas = paginas;
            this.lido = false;
    }

    marcarComoLido(){
        this.lido = true;
    }
    descricao(){
        return `${this.titulo} - ${this.autor}`;
    }
    verificarTamanho(){
        if (this.paginas<=150) return "Livro curto";
        if (this.paginas<=300) return "Livro médio";
        return "Livro longo";
    }
    
}


export default Livro;