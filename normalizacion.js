const main = require('./extraccion_promiseall');

const url = 'https://rickandmortyapi.com/api/character';

// Cache en memoria para evitar peticiones repetidas
let datosNormalizados = null;

async function normalizar() {
    
    // Retorna los datos cacheados si ya fueron almacenados
    if (datosNormalizados !== null) {
        console.log("Utilizando datos normalizados en caché");
        return datosNormalizados;
    }

    try {
        const datos = await main(url); // Llama a la funcion que extrae los datos

        // Mapea y normaliza los datos 
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
                cantidadEpisodios: personaje.episode.length, // Transforma el arreglo de episodios en su cantidad
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