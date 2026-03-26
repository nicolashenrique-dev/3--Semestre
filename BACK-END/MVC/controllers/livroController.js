import Livro from "../models/Livro.js";


//vetor de objetos de Livros

let livros = [
    new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", 1000),
    new Livro(2, "O Hobbit", "J.R.R. Tolkien", 300),
    new Livro(3, "O Silmarillion", "J.R.R. Tolkien", 500),
    new Livro(4, "O Senhor dos Anéis", "J.R.R. Tolkien", 1000),
    new Livro(5, "O Hobbit", "J.R.R. Tolkien", 300),
    new Livro(6, "O Silmarillion", "J.R.R. Tolkien", 500),
    new Livro(7, "O Senhor dos Anéis", "J.R.R. Tolkien", 1000),
    new Livro(8, "O Hobbit", "J.R.R. Tolkien", 300),
    new Livro(9, "O Silmarillion", "J.R.R. Tolkien", 500),
    new Livro(10, "O Senhor dos Anéis", "J.R.R. Tolkien", 1000)
];

//função para listar todos os livros

const LivroController = {

    listar: (req, res) => {
        res.render("livros.ejs", { livros: livros });
    },
    adicionar: (req, res) => {
        const { titulo, autor, paginas } = req.body;
        try {
            const novoLivro = new Livro(livros.length + 1, titulo, autor, Number(paginas));
            livros.push(novoLivro);
            res.redirect("/livros");
        } catch (error) {
            console.log(error.message);
            res.status(400).render("livros.ejs", { livros: livros, error: error.message });
        }
    },
    marcarComoLido: (req, res) => {
        const { id } = req.body;
        const livro = livros.find(l => l.id == id);
        if (livro) {
            livro.marcarComoLido();
            res.redirect("/livros");
        } else {
            res.status(404).send("Livro não encontrado");
        }
    }
}
export default LivroController;