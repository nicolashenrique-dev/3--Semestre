import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/categorias", async (req, res) => {
    try {
        const query = "SELECT * FROM categorias ORDER BY id_categoria";
        const result = await BD.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao listar categorias:', error.message);
        res.status(500).json({ error: 'Erro interno ao buscar categorias' });
    }
});

router.post("/categorias", async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        if (!nome || typeof nome !== "string" || nome.trim() === "") {
            return res.status(400).json({ error: 'O campo \'nome\' é obrigatório e deve ser um texto válido' });
        }

        const query = `
            INSERT INTO categorias (nome, descricao) 
            VALUES ($1, $2)
        `;
        const valores = [nome.trim(), descricao !== undefined ? descricao : null];

        await BD.query(query, valores);

        res.status(201).json({ message: 'Categoria adicionada com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar categoria:', error.message);
        if (error.code === "23505") {
            return res.status(409).json({ error: 'Categoria com este nome já existe' });
        }
        res.status(500).json({ error: 'Erro interno ao adicionar categoria' });
    }
});

router.put("/categorias/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
        if (!nome || typeof nome !== "string" || nome.trim() === "") {
            return res.status(400).json({ error: 'O campo \'nome\' é obrigatório e deve ser um texto válido' });
        }

        const verificar = await BD.query(
            `SELECT * FROM categorias WHERE id_categoria = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }

        const query = `
            UPDATE categorias 
            SET nome = $1, descricao = $2
            WHERE id_categoria = $3 
            RETURNING id_categoria AS id, nome, descricao
        `;
        const valores = [nome.trim(), descricao !== undefined ? descricao : null, id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error.message);
        res.status(500).json({ error: 'Erro interno ao atualizar categoria' });
    }
});

router.patch("/categorias/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
        if (nome === undefined && descricao === undefined) {
            return res.status(400).json({ error: 'Pelo menos um campo é obrigatório' });
        }

        if (nome !== undefined && (typeof nome !== "string" || nome.trim() === "")) {
            return res.status(400).json({ error: 'O campo \'nome\' não pode ser vazio ou ter tipo inválido' });
        }

        const verificar = await BD.query(
            `SELECT * FROM categorias WHERE id_categoria = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }

        const valores = [];
        const campos = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome.trim());
            contador++;
        }

        if (descricao !== undefined) {
            campos.push(`descricao = $${contador}`);
            valores.push(descricao);
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ error: 'Nenhum campo para atualizar' });
        }

        valores.push(id);
        const query = `
            UPDATE categorias 
            SET ${campos.join(', ')} 
            WHERE id_categoria = $${contador} 
            RETURNING id_categoria AS id, nome, descricao
        `;

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error.message);
        res.status(500).json({ error: 'Erro interno ao atualizar categoria' });
    }
});

router.delete("/categorias/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const verificar = await BD.query(
            `SELECT * FROM categorias WHERE id_categoria = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }

        const query = `
            DELETE FROM categorias 
            WHERE id_categoria = $1 
            RETURNING id_categoria AS id
        `;
        const valores = [id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao deletar categoria:', error.message);
        res.status(500).json({ error: 'Erro interno ao deletar categoria' });
    }
});

export default router;
