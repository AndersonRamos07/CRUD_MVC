const express = require('express')();
const funcao = require('./functions');


const port = 3000;

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

express.get('/Resultados', async (req, res) => {
    res.send(await funcao.gol(req))
    /*
    var resposta = await getsII.gol('lotofacil');
    res.render(__dirname + '/public/html/resultados.html', resposta);
    */
})

express.get('/ganhadores', async (req, res) => {
   // var resultado = await getsII.gol('lotofacil');
  //  res.render(__dirname + '/public/html/resultados.html', {resultados:resultado});
    res.send(await getsII.gol('lotofacil'))
})

express.listen(port, () => {
    console.log(`Server rodando na http://localhost:${port}`)
});