import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get("/usuarios", async (req, res) => {
    try {
        const query = "SELECT * FROM usuarios ORDER BY id_usuario";
        const usuarios = await BD.query(query);
        res.status(200).json(usuarios.rows);


    }

    catch (error) {
        console.error('Erro ao buscar usuarios', error.message);
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
});

//endpoint para adicionar um novo user, sql injection teste

// router.post("/usuarios", async (req, res) => {
//     try {
//         const { nome, email, senha } = req.body;
//         const query = `INSERT INTO teste (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`;
//         console.log(query);
//         await BD.query(query);
//         res.status(201).json({ message: 'Usuario adicionado com sucesso' });


//     }

//     catch (error) {
//         console.error('Erro ao adicionar usuario', error.message);
//         res.status(500).json({ error: 'Erro ao adicionar usuario' });
//     }
// });

router.post("/usuarios", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // 1. Validação básica
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // 2. Consulta parametrizada (A DEFESA CONTRA SQL INJECTION)
        // Usamos $1, $2, $3 para garantir que o banco trate os valores como dados, não como código
        const query = `
            INSERT INTO usuarios (nome, email, senha) 
            VALUES ($1, $2, $3)
        `;

        // 3. Passamos os valores como um array separado
        const valores = [nome, email, senha];

        console.log("Executando query:", query);
        console.log("Com valores:", valores);

        await BD.query(query, valores);

        res.status(201).json({ message: 'Usuario adicionado com sucesso' });

    } catch (error) {
        console.error('Erro ao adicionar usuario', error.message);
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

        res.status(200).json(resultado.rows[0]);  // ← retorna o usuário atualizado
    } catch (error) {
        console.error('Erro ao atualizar usuario', error.message);
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
});

export default router;
