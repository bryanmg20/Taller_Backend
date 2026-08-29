const express = require('express');
const normalizar = require('./normalizacion');

const router = express.Router();

router.get('/Type-informacion', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.some(personaje => personaje.tipo !== "");
    
        res.json({ resultado });
})  


router.get('/Imagen-1Episodio', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.every(personaje => personaje.imagen !== "" && personaje.cantidadEpisodios > 0);

    res.json({ resultado });
})

module.exports = router;