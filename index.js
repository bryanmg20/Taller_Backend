const express = require('express');
const filtros = require('./consultas_filtros');
const verifaciones = require('./consultas_verificaciones');

const app = express();

app.use('/filtros', filtros);
app.use('/verificaciones', verifaciones);

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});