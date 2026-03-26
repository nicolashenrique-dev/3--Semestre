import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/produtos", async (req, res) => {
    try {
        const query = "SELECT * FROM produtos ORDER BY id_produto";
        const result = await BD.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao listar produtos:', error.message);
        res.status(500).json({ error: 'Erro interno ao buscar produtos' });
    }
});

router.post("/produtos", async (req, res) => {
    try {
        const { nome, preco, link_imagem, link_produto, frete_gratis, categoria } = req.body;

        if (!nome || preco === undefined) {
            return res.status(400).json({ error: 'Os campos nome e preco são obrigatórios' });
        }

        if (preco < 0) {
            return res.status(400).json({ error: 'O preco deve ser maior ou igual a zero' });
        }

        const query = `
            INSERT INTO produtos (nome, preco, link_imagem, link_produto, frete_gratis, categoria) 
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const valores = [
            nome, 
            preco, 
            link_imagem !== undefined ? link_imagem : null, 
            link_produto !== undefined ? link_produto : null, 
            frete_gratis !== undefined ? frete_gratis : false, 
            categoria !== undefined ? categoria : null
        ];

        await BD.query(query, valores);

        res.status(201).json({ message: 'Produto adicionado com sucesso' });
    } catch (error) {
        console.error('Erro ao adicionar produto:', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'A categoria ou o usuário fornecido não existe' });
        }
        res.status(500).json({ error: 'Erro interno ao adicionar produto' });
    }
});

router.put("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, preco, link_imagem, link_produto, frete_gratis, categoria } = req.body;

    try {
        if (!nome || preco === undefined) {
            return res.status(400).json({ error: 'Os campos nome e preco são obrigatórios' });
        }

        if (preco < 0) {
            return res.status(400).json({ error: 'O preco deve ser maior ou igual a zero' });
        }

        const verificar = await BD.query(
            `SELECT * FROM produtos WHERE id_produto = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        const query = `
            UPDATE produtos 
            SET nome = $1, preco = $2, link_imagem = $3, link_produto = $4, frete_gratis = $5, categoria = $6
            WHERE id_produto = $7 
            RETURNING *
        `;
        const valores = [nome, preco, link_imagem, link_produto, frete_gratis, categoria, id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'A categoria ou o usuário fornecido não existe' });
        }
        res.status(500).json({ error: 'Erro interno ao atualizar produto' });
    }
});

router.patch("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, preco, link_imagem, link_produto, frete_gratis, categoria } = req.body;

    try {
        if (nome === undefined && preco === undefined && link_imagem === undefined && link_produto === undefined && frete_gratis === undefined && categoria === undefined) {
            return res.status(400).json({ error: 'Pelo menos um campo é obrigatório' });
        }

        if (preco !== undefined && preco < 0) {
            return res.status(400).json({ error: 'O preco deve ser maior ou igual a zero' });
        }

        const verificar = await BD.query(
            `SELECT * FROM produtos WHERE id_produto = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        const valores = [];
        const campos = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }

        if (preco !== undefined) {
            campos.push(`preco = $${contador}`);
            valores.push(preco);
            contador++;
        }

        if (link_imagem !== undefined) {
            campos.push(`link_imagem = $${contador}`);
            valores.push(link_imagem);
            contador++;
        }

        if (link_produto !== undefined) {
            campos.push(`link_produto = $${contador}`);
            valores.push(link_produto);
            contador++;
        }

        if (frete_gratis !== undefined) {
            campos.push(`frete_gratis = $${contador}`);
            valores.push(frete_gratis);
            contador++;
        }

        if (categoria !== undefined) {
            campos.push(`categoria = $${contador}`);
            valores.push(categoria);
            contador++;
        }

        valores.push(id);
        const query = `
            UPDATE produtos 
            SET ${campos.join(', ')} 
            WHERE id_produto = $${contador} 
            RETURNING *
        `;

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error.message);
        if (error.code === '23503') {
            return res.status(400).json({ error: 'A categoria ou o usuário fornecido não existe' });
        }
        res.status(500).json({ error: 'Erro interno ao atualizar produto' });
    }
});

router.delete("/produtos/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const verificar = await BD.query(
            `SELECT * FROM produtos WHERE id_produto = $1`,
            [id]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        const query = `
            DELETE FROM produtos 
            WHERE id_produto = $1 
            RETURNING id_produto AS id
        `;
        const valores = [id];

        const resultado = await BD.query(query, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao deletar produto:', error.message);
        res.status(500).json({ error: 'Erro interno ao deletar produto' });
    }
});

export default router;
