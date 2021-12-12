const express = require('express')();
const funcao = require('./funcoes');
const bodyParser = require('body-parser');

express.use(bodyParser.urlencoded({extended: false}));

const port = 8000;

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

express.post('/resultados', async (req, res) => {
    res.send({"resultados": await funcao.resultados(req.body.opcaoLoteria)});
})

express.post('/ganhadores', async (req, res) => {
    //res.send(await funcao.gol('lotofacil'))
})

express.listen(port, () => {
    console.log(`Server rodando na http://localhost:${port}`)
});