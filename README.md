# Taller Backend

Backend desarrollado con **Node.js** y **Express**, utilizando la API externa de **Rick and Morty** para obtener, normalizar, filtrar, verificar y agrupar información de los personajes.

## Requisitos

Para ejecutar el proyecto se necesita tener instalado:

- **Node.js**
- **pnpm**
- **Express**

### 1. Node.js

Primero verificar si Node.js está instalado:

    node --version

Si aparece una versión, Node.js ya está instalado.

Si no está instalado, se puede instalar mediante **NVM (Node Version Manager)**.

Primero, instalar NVM con el siguiente comando:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.6/install.sh | bash

Después de instalar NVM, cerrar y volver a abrir la terminal para que los cambios se apliquen.

Verificar que NVM esté instalado correctamente:

    nvm --version

Instalar la versión LTS de Node.js:

    nvm install --lts

Utilizar la versión LTS instalada:

    nvm use --lts

Finalmente, comprobar que Node.js y npm estén instalados:

    node --version
    npm --version

### 2. pnpm

Verificar si pnpm está instalado:

    pnpm --version

Si no está instalado, se puede instalar utilizando npm:

    npm install -g pnpm

Después comprobar la instalación:

    pnpm --version

### 3. Express

Express es una dependencia del proyecto, por lo que no es necesario instalarlo de manera global.

Después de clonar el repositorio, las dependencias del proyecto se instalan con:

    pnpm install

Este comando instalará Express y las demás dependencias especificadas en el archivo `package.json`.

## Instalación

Clonar el repositorio:

    git clone <URL_DEL_REPOSITORIO>

Entrar en la carpeta del proyecto:

    cd Taller_Backend

Instalar las dependencias:

    pnpm install

## Ejecución

Para iniciar el servidor, ejecuta cualquiera de los siguientes comandos:

    node index.js

    pnpm run start

    pnpm start

El servidor estará disponible en:

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

Los datos normalizados se guardan en una variable que funciona como **caché en memoria**. Por esta razón, las siguientes peticiones son más rápidas y no es necesario volver a consultar la API externa.

La caché se pierde cuando se detiene o se reinicia el servidor.

## API utilizada

El proyecto obtiene la información de los personajes mediante la API de Rick and Morty:

https://rickandmortyapi.com/api/character

La información se obtiene recorriendo automáticamente todas las páginas disponibles de la API y posteriormente se normaliza antes de ser utilizada por los diferentes endpoints.

## Tecnologías utilizadas

- **Node.js**: entorno de ejecución utilizado para ejecutar JavaScript en el servidor.
- **Express**: framework utilizado para crear el servidor y los diferentes endpoints.
- **pnpm**: gestor de paquetes utilizado para instalar y administrar las dependencias.
- **NVM**: herramienta utilizada para instalar y administrar versiones de Node.js.
- **Rick and Morty API**: API externa utilizada como fuente de información de los personajes.
