import express from "express";
import JogadorController from "../controllers/livroController.js";

const router = express.Router();

router.get("/jogadores", JogadorController.listar);
router.post("/jogadores", JogadorController.adicionar);
router.post("/jogadores/adicionar-pontuacao", JogadorController.adicionarPontuacao);

export default router;  