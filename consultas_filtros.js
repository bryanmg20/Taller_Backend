const express = require('express');
const normalizar = require('./normalizacion');

// Router para manejar los endpoints
const router = express.Router();

router.get('/vivos-humanos', async (req, res) => {
    const personajes = await normalizar();

    // Filtra los personajes que están vivos y son humanos
    const resultado = personajes.filter(personaje =>
        personaje.estado === 'Alive' &&
        personaje.especie === 'Human'
    );

    res.json(resultado);
});

router.get('/20-episodios', async (req, res) => {
    const personajes = await normalizar();

    // Filtra los personajes que han aparecido en 20 o más episodios
    const resultado = personajes.filter(personaje =>
        personaje.cantidadEpisodios >= 20
    );

    res.json(resultado);
});

router.get('/primer-alien-female', async (req, res) => {
    const personajes = await normalizar();

    // Devuelve el primer personaje que sea un alien femenino
    const resultado = personajes.find(personaje =>
        personaje.especie === 'Alien' &&
        personaje.genero === 'Female'
    );

    res.json(resultado);
});

module.exports = router;