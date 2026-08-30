const express = require('express');
const normalizar = require('./normalizacion');

const router = express.Router();

router.get('/Especie-agrupacionProm', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.reduce((acumulador, personaje) => {
        const especie = personaje.especie;
        if (!acumulador[especie]) {
            acumulador[especie] = {
                cantidad: 0,
                promedioEpisodios: 0,
                vivos: 0
            };
        }

        const grupo = acumulador[especie];

        grupo.promedioEpisodios =
            (grupo.promedioEpisodios * grupo.cantidad + personaje.cantidadEpisodios)
            / (grupo.cantidad + 1);

        grupo.cantidad++;

        if (personaje.estado === "Alive") {
            acumulador[especie].vivos++;
        }

        return acumulador;

        },{})
    
    res.json(resultado);

    
})




module.exports = router;  