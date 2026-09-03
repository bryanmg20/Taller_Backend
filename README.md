# Taller Backend

Backend desarrollado con **Node.js** y **Express**, utilizando la API externa de **Rick and Morty** para obtener, normalizar, filtrar, verificar y agrupar información de los personajes.

## Requisitos

Antes de ejecutar el proyecto, verificar que estén instalados:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

Puedes comprobar las versiones con:

    node --version
    pnpm --version

## Instalación

Clonar el repositorio y entrar en la carpeta del proyecto:

    git clone <URL_DEL_REPOSITORIO>
    cd Taller_Backend

Instalar las dependencias:

    pnpm install

## Ejecución

Para iniciar el servidor:

    node index.js

Una vez iniciado, estará disponible en:

    http://localhost:3000

## Endpoints

### Filtros

- **Personajes humanos vivos**

  `GET /filtros/vivos-humanos`

  http://localhost:3000/filtros/vivos-humanos

- **Personajes con 20 o más episodios**

  `GET /filtros/20-episodios`

  http://localhost:3000/filtros/20-episodios

- **Primer personaje Alien de género femenino**

  `GET /filtros/primer-alien-female`

  http://localhost:3000/filtros/primer-alien-female

### Verificaciones

- **Verificar información del campo Type**

  `GET /verificaciones/Type-informacion`

  http://localhost:3000/verificaciones/Type-informacion

- **Verificar personajes con imagen y un episodio**

  `GET /verificaciones/Imagen-1Episodio`

  http://localhost:3000/verificaciones/Imagen-1Episodio

### Agrupaciones

- **Cantidad, vivos y promedio de personajes por especie**

  `GET /agrupaciones/Especie-agrupacionProm`

  http://localhost:3000/agrupaciones/Especie-agrupacionProm

- **Personajes agrupados por cantidad de episodios**

  `GET /agrupaciones/PersonajesXEpisodios`

  http://localhost:3000/agrupaciones/PersonajesXEpisodios

## Caché
La primera vez que se ejecuta cualquier endpoint, puede tardar unos segundos porque se debe extraer la información desde la API externa.

Los datos se guardan en una variable que funciona como caché, por lo que las siguientes peticiones son más rápidas y no es necesario volver a consultar la API externa.

La caché se pierde cuando se reinicia el servidor.

## API utilizada

El proyecto obtiene la información de los personajes mediante la API de Rick and Morty:

https://rickandmortyapi.com/api/character

La información se obtiene recorriendo automáticamente todas las páginas disponibles de la API y posteriormente se normaliza antes de ser utilizada por los diferentes endpoints.


