const main = require('./extraccion_promiseall');

const url = 'https://rickandmortyapi.com/api/character';

let datosNormalizados = null;

async function normalizar() {
    
    if (datosNormalizados !== null) {
        console.log("Utilizando datos normalizados en caché");
        return datosNormalizados;
    }

    try {
        const datos = await main(url);

        datosNormalizados = datos.map(personaje => {
            return {
                id: personaje.id,
                nombre: personaje.name,
                estado: personaje.status,
                especie: personaje.species,
                tipo: personaje.type,
                genero: personaje.gender,
                origen: personaje.origin.name,
                ubicacionActual: personaje.location.name,
                cantidadEpisodios: personaje.episode.length,
                imagen: personaje.image
            };
        });
        
        return datosNormalizados;
        //console.log(datosNormalizados);
    } catch (error) {
        console.log('Error al normalizar:', error);
    }
}

module.exports = normalizar;
//normalizar();