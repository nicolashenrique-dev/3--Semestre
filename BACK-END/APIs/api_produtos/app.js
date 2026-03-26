import { BD, testarConexao } from "./db.js";
import express from 'express'
import rotasUsuarios from "./src/routes/rotasUsuarios.js";
import rotasCategorias from "./src/routes/rotasCategorias.js";
import rotasProdutos from "./src/routes/rotasProdutos.js";
import cors from 'cors';
//swagger
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get ('/', async(req, res) => {
    // Corrigido: Chamando a função importada diretamente
    await testarConexao(); 
    res.redirect('/swagger');
})

app.use(rotasUsuarios);
app.use(rotasCategorias);
app.use(rotasProdutos);

const porta = 3000;

app.listen (porta, () => {
    // Corrigido: De https para http para o link funcionar no clique
    console.log(`http://localhost:${porta}`); 
})
