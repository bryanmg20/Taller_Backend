const express = require('express');
const filtros = require('./consultas_filtros');

const app = express();

app.use('/filtros', filtros);

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});