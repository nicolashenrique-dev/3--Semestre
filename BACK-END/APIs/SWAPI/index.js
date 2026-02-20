import express from "express";

const app = express();


//primeiro endpoint
app.get("/", async (req, res) => {
    res.json({
        message: "API funcionando!"
    })
})

app.get("/swapi/:id", async (req, res) => {
    const codigo = req.params.id;
    const response = await fetch(`https://swapi.info/api/people/${codigo}`);
    const data = await response.json();

    const Nome = data.name;
    const Altura = data.height;
    const Massa = data.mass;
    const corOlhos = data.eye_color


    res.json({
        Nome,
        Altura,
        Massa,
        corOlhos
    });
})









const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/swapi`);
});