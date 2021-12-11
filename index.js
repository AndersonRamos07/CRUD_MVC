const express = require('express')();
const gets = require('./funcoes');
const getsII = require('./functionII');


const port = 3000;

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

express.get('/Resultados', async (req, res) => {
    var resposta = await gets.getResultados('lotofacil');
    res.send(resposta);
})

express.get('/ganhadores', async (req, res) => {
    res.send( await getsII.gol('lotofacil'));
})

express.listen(port, () => {
    console.log(`Server rodando na http://localhost:${port}`)
});