const express = require('express');
const normalizar = require('./normalizacion');

// Router para manejar los endpoints
const router = express.Router();

router.get('/Especie-agrupacionProm', async (req, res) => {
    const personajes = await normalizar();

    // Agrupa cantidad de personajes, promedio de episodios y perosnajes vivos
    // Usando la especie como clave
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

        // Calculo incremental del promedio de episodios
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


router.get('/PersonajesXEpisodios', async (req, res) => {
    const personajes = await normalizar();

    // Clasifica y cuenta los personajes dentro de rangos fijos de episodios
    const resultado = personajes.reduce((acumulador, personaje) => {

        const episodios = personaje.cantidadEpisodios;

        if (episodios >= 1 && episodios <= 5) {
            acumulador["1-5"]++;
        } 
        else if (episodios >= 6 && episodios <= 15) {
            acumulador["6-15"]++;
        } 
        else if (episodios >= 16 && episodios <= 30) {
            acumulador["16-30"]++;
        } 
        else if (episodios > 30) {
            acumulador["30+"]++;
        }

        return acumulador;
   }, {
        "1-5": 0,
        "6-15": 0,
        "16-30": 0,
        "30+": 0
    });

    res.json(resultado);
});



module.exports = router;  