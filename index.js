const express = require('express');
const filtros = require('./consultas_filtros');
const verificaciones = require('./consultas_verificaciones')

const app = express();

app.use('/filtros', filtros);
app.use('/verificaciones', verificaciones);

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});