import express from "express";

const app = express();

app.use('/dogs', express.static('public'))


//primeiro endpoint
app.get("/", async (req, res) => {
    res.json({
        message: "API de CEP funcionando!"
    })
})

//novo endpoint para consumir a api via cep
app.get("/cep/:codigo", async (req, res) => {
    const codigo = req.params.codigo;
    const response = await fetch(`https://viacep.com.br/ws/${codigo}/json/`);
    const data = await response.json();

    const estado = data.uf;
    const cidade = data.localidade;
    const bairro = data.bairro;
    const logradouro = data.logradouro;

    res.json({
        estado,
        cidade,
        bairro,
        logradouro
    });
})


app.get('/dog/:id', async (req, res) => {
    const id = req.params.id;
    const url = `https://http.dog/${id}.jpg`;

    res.json ({url})

})


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/dogs`);
});