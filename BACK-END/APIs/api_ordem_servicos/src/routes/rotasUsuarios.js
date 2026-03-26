import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/usuarios", async (req, res) => {
    try {
        const query = "SELECT * FROM usuarios ORDER BY id_usuario";
        const usuarios = await BD.query(query);
        res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao buscar usuarios', error.message);
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
});

router.post("/usuarios", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const query = `
            INSERT INTO usuarios (nome, email, senha) 
            VALUES ($1, $2, $3)
        `;
        const valores = [nome, email, senha];

        await BD.query(query, valores);

        res.status(201).json({ message: 'Usuario adicionado com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar usuario', error.message);
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Este email já está cadastrado' });
        }
        res.status(500).json({ error: 'Erro ao adicionar usuario' });
    }
});

router.put("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const verificar = await BD.query(
            `SELECT * FROM usuarios WHERE id_usuario = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario nao encontrado' });
        }

        const query = `
            UPDATE usuarios 
            SET nome = $1, email = $2, senha = $3 
            WHERE id_usuario = $4 
            RETURNING id_usuario AS id, nome, email
        `;
        const valores = [nome, email, senha, id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuario', error.message);
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Este email já está em uso' });
        }
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
});

router.patch("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        if (nome === undefined && email === undefined && senha === undefined) {
            return res.status(400).json({ error: 'Pelo menos um campo é obrigatório' });
        }

        const verificar = await BD.query(
            `SELECT * FROM usuarios WHERE id_usuario = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario nao encontrado' });
        }

        const valores = [];
        const campos = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }

        if (email !== undefined) {
            campos.push(`email = $${contador}`);
            valores.push(email);
            contador++;
        }

        if (senha !== undefined) {
            campos.push(`senha = $${contador}`);
            valores.push(senha);
            contador++;
        }

        if (campos.length === 0) {
            return res.status(400).json({ error: 'Nenhum campo para atualizar' });
        }

        valores.push(id);
        const query = `
            UPDATE usuarios 
            SET ${campos.join(', ')} 
            WHERE id_usuario = $${contador} 
            RETURNING id_usuario AS id, nome, email
        `;

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuario', error.message);
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Este email já está em uso' });
        }
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
});

router.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const verificar = await BD.query(
            `SELECT * FROM usuarios WHERE id_usuario = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario nao encontrado' });
        }

        const query = `
            DELETE FROM usuarios 
            WHERE id_usuario = $1 
            RETURNING id_usuario AS id
        `;
        const valores = [id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao deletar usuario', error.message);
        res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
});

export default router;
