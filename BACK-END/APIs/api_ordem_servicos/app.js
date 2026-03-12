import {BD, testarConexao } from "./db.js";
import express from 'express'
import rotasUsuarios from "./src/routes/rotasUsuarios.js";
import rotasDepartamentos from "./src/routes/rotasDepartamentos.js";
import rotasOrdem from "./src/routes/rotasOrdem.js";

//swagger
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.js';

const app = express();
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get ('/', async(req, res) => {
    // Corrigido: Chamando a função importada diretamente
    await testarConexao(); 
    res.redirect('/swagger');
})



app.use(rotasUsuarios);
app.use(rotasDepartamentos);
app.use(rotasOrdem);
const porta = 3000;

app.listen (porta, () => {
    // Corrigido: De https para http para o link funcionar no clique
    console.log(`http://localhost:${porta}`); 
})

