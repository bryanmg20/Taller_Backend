const express = require('express');
const normalizar = require('./normalizacion');

const router = express.Router();

router.get('/vivos-humanos', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.filter(personaje =>
        personaje.estado === 'Alive' &&
        personaje.especie === 'Human'
    );

    res.json(resultado);
});

router.get('/20-episodios', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.filter(personaje =>
        personaje.cantidadEpisodios >= 20
    );

    res.json(resultado);
});

module.exports = router;