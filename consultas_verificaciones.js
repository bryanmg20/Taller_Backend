const express = require('express');
const normalizar = require('./normalizacion');

const router = express.Router();

router.get('/Type-informacion', async (req, res) => {
    const personajes = await normalizar();

    const resultado = personajes.some(personaje => personaje.tipo !== "");
    
        res.json({ resultado });
})  


module.exports = router;