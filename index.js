const express = require('express')();
const gets = require('./funcoes');

const port = 3000;

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

express.get('/Resultados', (req, res) => {
    var resposta = gets.getResultados('lotofacil');
    res.send(resposta);
})

express.get('/ganhadores', (req, res) => {
    var resposta = gets.getGanhadores();
})

express.listen(port, () => {
    console.log(`Server rodando na http://localhost:${port}`)
});