const main = require('./extraccion_secuencial');

const url = 'https://rickandmortyapi.com/api/character';

async function ejecutar() {
    try {
        const resultado = await main(url);
        console.log(resultado);
    } catch (err) {
        console.log(err);
    }
}

ejecutar();