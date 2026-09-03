const express = require('express');
const normalizar = require('./normalizacion');

// Router para manejar los endpoints
const router = express.Router();

router.get('/Type-informacion', async (req, res) => {
    const personajes = await normalizar();

    // Verifica si al menos un personaje tiene el campo tipo vacio
    const resultado = personajes.some(personaje => personaje.tipo !== "");
    
        res.json({ resultado });
})  


router.get('/Imagen-1Episodio', async (req, res) => {
    const personajes = await normalizar();

    // Verifica si todos los personajes tienen imagen y aparezcan en 1 o mas episodios
    const resultado = personajes.every(personaje => personaje.imagen !== "" && personaje.cantidadEpisodios > 0);

    res.json({ resultado });
})

module.exports = router;