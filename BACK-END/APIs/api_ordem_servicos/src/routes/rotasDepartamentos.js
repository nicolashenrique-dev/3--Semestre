import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// GET - Lista todos os departamentos
router.get("/departamentos", async (req, res) => {
    try {
        const query = "SELECT * FROM departamentos ORDER BY id_departamentos";
        const result = await BD.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Erro ao listar departamentos:", error.message);
        res.status(500).json({ error: "Erro interno ao buscar departamentos" });
    }
});

// POST - Cria um novo departamento
router.post("/departamentos", async (req, res) => {
    try {
        const { nome } = req.body;

        // Validação mínima (igual ao PUT)
        if (!nome || typeof nome !== "string" || nome.trim() === "") {
            return res.status(400).json({ error: "O campo 'nome' é obrigatório e não pode ser vazio" });
        }

        const trimmedNome = nome.trim();

        const query = `
      INSERT INTO departamentos (nome) 
      VALUES ($1) 
      RETURNING id_departamentos AS id, nome
    `;
        const valores = [trimmedNome];

        const result = await BD.query(query, valores);

        // Retorna o departamento criado (alinhado com PUT e Swagger)
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao adicionar departamento:", error.message);

        // Se quiser tratar duplicidade no futuro (unique constraint)
        if (error.code === "23505") {
            return res.status(409).json({ error: "Departamento com esse nome já existe" });
        }

        res.status(500).json({ error: "Erro interno ao adicionar departamento" });
    }
});

// PUT - Atualiza um departamento existente (já estava bom, só limpei)
router.put("/departamentos/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
        // Validação de presença do ID e Nome
        if (!nome || nome.trim() === "") {
            return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
        }

        const query = `
            UPDATE departamentos 
            SET 
                nome = $1,
                descricao = COALESCE($2, descricao) 
            WHERE id_departamentos = $3 
            RETURNING id_departamentos AS id, nome, descricao
        `;
        
        // Se descricao não vier no body, passamos undefined para o COALESCE ignorar
        const valores = [nome.trim(), descricao !== undefined ? descricao : null, id];
        const result = await BD.query(query, valores);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Departamento não encontrado" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Erro ao atualizar departamento:", error.message);
        res.status(500).json({ error: "Erro interno ao atualizar departamento" });
    }
});

export default router;