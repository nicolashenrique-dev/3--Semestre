import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/ordens", async (req, res) => {
    try {
        const query = "SELECT * FROM ordem_servicos ORDER BY id_ordem";
        const ordens = await BD.query(query);
        res.status(200).json(ordens.rows);
    } catch (error) {
        console.error('Erro ao buscar ordens', error.message);
        res.status(500).json({ error: 'Erro ao buscar ordens' });
    }
});

router.post("/ordens", async (req, res) => {
    try {
        const { titulo, descricao, status, id_usuario } = req.body;
        
        if (!titulo || !descricao || !status || id_usuario === undefined) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const query = `
            INSERT INTO ordem_servicos (titulo, descricao, status, id_usuario) 
            VALUES ($1, $2, $3, $4)
        `;
        const valores = [titulo, descricao, status, id_usuario];

        await BD.query(query, valores);

        res.status(201).json({ message: 'Ordem adicionada com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar ordem', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'O usuário fornecido não existe (id_usuario)' });
        }
        res.status(500).json({ error: 'Erro ao adicionar ordem' });
    }
});

router.put("/ordens/:id", async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status, id_usuario } = req.body;

    try {
        if (!titulo || !descricao || !status || id_usuario === undefined) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const verificar = await BD.query(
            `SELECT * FROM ordem_servicos WHERE id_ordem = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Ordem não encontrada' });
        }

        const query = `
            UPDATE ordem_servicos 
            SET titulo = $1, descricao = $2, status = $3, id_usuario = $4 
            WHERE id_ordem = $5 
            RETURNING id_ordem AS id, titulo, descricao, status, id_usuario
        `;
        const valores = [titulo, descricao, status, id_usuario, id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar ordem', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'O usuário fornecido não existe (id_usuario)' });
        }
        res.status(500).json({ error: 'Erro ao atualizar ordem' });
    }
});

router.patch("/ordens/:id", async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status, id_usuario } = req.body;

    try {
        if (titulo === undefined && descricao === undefined && status === undefined && id_usuario === undefined) {
            return res.status(400).json({ error: 'Pelo menos um campo é obrigatório' });
        }

        const verificar = await BD.query(
            `SELECT * FROM ordem_servicos WHERE id_ordem = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Ordem não encontrada' });
        }

        const valores = [];
        const campos = [];
        let contador = 1;

        if (titulo !== undefined) {
            campos.push(`titulo = $${contador}`);
            valores.push(titulo);
            contador++;
        }

        if (descricao !== undefined) {
            campos.push(`descricao = $${contador}`);
            valores.push(descricao);
            contador++;
        }

        if (status !== undefined) {
            campos.push(`status = $${contador}`);
            valores.push(status);
            contador++;
        }

        if (id_usuario !== undefined) {
            campos.push(`id_usuario = $${contador}`);
            valores.push(id_usuario);
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ error: 'Nenhum campo para atualizar' });
        }

        valores.push(id);
        const query = `
            UPDATE ordem_servicos 
            SET ${campos.join(', ')} 
            WHERE id_ordem = $${contador} 
            RETURNING id_ordem AS id, titulo, descricao, status, id_usuario
        `;

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar ordem', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'O usuário fornecido não existe (id_usuario)' });
        }
        res.status(500).json({ error: 'Erro ao atualizar ordem' });
    }
});

router.delete("/ordens/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const verificar = await BD.query(
            `SELECT * FROM ordem_servicos WHERE id_ordem = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Ordem não encontrada' });
        }

        const query = `
            DELETE FROM ordem_servicos 
            WHERE id_ordem = $1 
            RETURNING id_ordem AS id
        `;
        const valores = [id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao deletar ordem', error.message);
        res.status(500).json({ error: 'Erro ao deletar ordem' });
    }
});

export default router;