import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/ordens", async (req, res) => {
    try {
        const query = "SELECT * FROM ordem_servicos ORDER BY id_ordem";
        const ordens = await BD.query(query);
        res.status(200).json(ordens.rows);


    }

    catch (error) {
        console.error('Erro ao buscar ordens', error.message);
        res.status(500).json({ error: 'Erro ao buscar ordens' });
    }
});

router.post("/ordens", async (req, res) => {
    try {
        const { titulo, descricao, status, id_usuario } = req.body;
        
        if (!titulo || !descricao || !status || !id_usuario) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const query = `INSERT INTO ordem_servicos (titulo, descricao, status, id_usuario) VALUES ($1, $2, $3, $4)`;
        const valores = [titulo, descricao, status, id_usuario];
        await BD.query(query, valores);
        res.status(201).json({ message: 'Ordem adicionada com sucesso' });
    }
    catch (error) {
        console.error('Erro ao adicionar ordem', error.message);
        res.status(500).json({ error: 'Erro ao adicionar ordem' });
    }
});

router.put("/ordens/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, status, id_usuario } = req.body;

        if (!titulo || !descricao || !status || !id_usuario) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const query = `UPDATE ordem_servicos SET titulo = $1, descricao = $2, status = $3, id_usuario = $4 WHERE id_ordem = $5`;
        const valores = [titulo, descricao, status, id_usuario, id];
        const resultado = await BD.query(query, valores);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ error: 'Ordem não encontrada' });
        }

        res.status(200).json({ message: 'Ordem atualizada com sucesso' });
    }
    catch (error) {
        console.error('Erro ao atualizar ordem', error.message);
        res.status(500).json({ error: 'Erro ao atualizar ordem' });
    }
});

export default router;