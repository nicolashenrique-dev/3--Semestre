import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/livros", LivroController.listar);
router.post("/livros", LivroController.adicionar);
router.post("/livros/marcar-lido", LivroController.marcarComoLido);

export default router;