const fs = require('fs');

const pegarConteudo = '{"alguma coisa": "mais outra"}';

const outroConteudo = '{"vai": "que dá"}';

try{
    fs.writeFileSync(__dirname+'/aros.json', outroConteudo)
}catch (err){
    console.error(err)
};