const puppet = require('puppeteer');

var getResultados = async (loteria) => {
    const browser = await puppet.launch();
    const page = await browser.newPage();
    await page.goto(`http://loterias.caixa.gov.br/wps/portal/loterias/landing/${loteria}`);

    page.waitForNavigation();

    const dezenas = await page.evaluate(() => {
        var dezenasTodas = document.querySelector(`.numbers.${loteria}`).innerText;
        const quantas = quantasDezenas(loteria);
        const porDezenas = porDezenas(quantas, dezenasTodas);

        return {
            porDezenas
        }
    });    
    await browser.close();
    console.log(porDezenas);
};

function getGanhadores() {
    document.body.innerHTML = "Ganhadores";
};

function getLoteria() {
    console.log('Loteria');
};

const quantasDezenas = (loteria) => {
    switch (loteria){
        case "lotofacil":
            return 15;
        case "federal":
            return 0;
        case "lotomania":
            return 20;
        case "quina":
            return 5;
        case "dupla-sena":
            return 12;
        case "megaSena":
            return 6;
        case "timemania":
        case "diadesorte":
            return 7;
    }
}

const porDezenas = (quantas, dezenas) => {
    let dezena;
    let resultado = [];
    for (var i = 0; i < quantas*2; i++){
        dezena = dezenas[i] + dezenas[i + 1];
        if(dezena.length == 2){
            resultado.push(dezena);
            i++;
        }
    }
    return resultado;
} 

module.exports = {getResultados, getGanhadores, getLoteria};