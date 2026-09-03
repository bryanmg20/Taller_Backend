const express = require('express');
const filtros = require('./consultas_filtros');
const verificaciones = require('./consultas_verificaciones')
const agrupaciones = require('./consultas_agrupaciones');

const app = express();

// Modulariza las rutas para cada tipo de consulta
app.use('/filtros', filtros);
app.use('/verificaciones', verificaciones);
app.use('/agrupaciones', agrupaciones);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});