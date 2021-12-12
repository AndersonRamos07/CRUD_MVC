const puppet = require('puppeteer');

const resultados = async (loteria) =>{
    const browser = await puppet.launch();
    const page = await browser.newPage();
    await page.goto(`http://loterias.caixa.gov.br/wps/portal/loterias/landing/${loteria}`);
    page.waitForNavigation();

    switch (loteria){
        case "lotofacil":
        case "lotomania":
            return await page.evaluate((queryS) => { return Array.from(document.querySelectorAll(".lista-dezenas li"), el => el.innerText) });
            break;
        case "duplasena":
            return await page.evaluate((queryS) => { return Array.from(document.querySelectorAll(".dupla-sena li"), el => el.innerText) });
            break;
        case "diadesorte":
        case "megasena":        
        case "quina":
        case "supersete":
        case "timemania":
            return await page.evaluate((queryS) => { return Array.from(document.querySelectorAll("#ulDezenas li"), el => el.innerText) });
            break;
    };

    page.waitForNavigation();
    
    console.log(typeof(text));

    await browser.close();
};

module.exports = {resultados}