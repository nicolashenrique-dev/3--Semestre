import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/departamentos", async (req, res) => {
    try {
        const query = "SELECT * FROM departamentos ORDER BY id_departamentos";
        const departamentos = await BD.query(query);
        res.status(200).json(departamentos.rows);


    }

    catch (error) {
        console.error('Erro ao buscar departamentos', error.message);
        res.status(500).json({ error: 'Erro ao buscar departamentos' });
    }
});

router.post("/departamentos", async (req, res) => {
    try {
        const { nome } = req.body;
        const query = `INSERT INTO departamentos (nome) VALUES ($1)`;
        const valores = [nome];
        await BD.query(query, valores);
        res.status(201).json({ message: 'Departamento adicionado com sucesso' });
    }
    catch (error) {
        console.error('Erro ao adicionar departamento', error.message);
        res.status(500).json({ error: 'Erro ao adicionar departamento' });
    }
});

router.put("/departamentos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const query = `UPDATE departamentos SET nome = $1 WHERE id_departamentos = $2`;
        const valores = [nome, id];
        await BD.query(query, valores);
        res.status(200).json({ message: 'Departamento atualizado com sucesso' });
    }
    catch (error) {
        console.error('Erro ao atualizar departamento', error.message);
        res.status(500).json({ error: 'Erro ao atualizar departamento' });
    }
});

export default router;