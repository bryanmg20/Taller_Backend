const delay = async (ms) => {
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

async function getdata_rickandmorty (url){
    let max_pages;
    try{
        const res = await fetch(url);
        const json = await res.json();
        max_pages = json.info.pages; //obtiene el numero de paginas
    }catch(err){
        console.log("Error al obtener el numero de paginas maximo.", err)
        return null
    }

    const lots = [] //contiene los lotes, cada lote es una lista de paginas de la api
    const interval = 5; //tamaño de cada lote

    let actual_page = 1
    while(actual_page < max_pages){ //itera pagina secuencialmente hasta la ultima disponible
        let lot = []
        for(let i = 1; i<=interval;i++){
            lot.push(`https://rickandmortyapi.com/api/character?page=${actual_page}`) //agrega a la lista cada pagina a su lote
            if(actual_page == max_pages) break; // si en la iteracion se acaba de ingresar la ultima pagina, se detiene
            actual_page++;
        }
        lots.push(lot)
        
    }
    const characters = await fetchAllCharacters(lots)
    return characters
}

async function fetchAllCharacters (lots){
    const characters = []
    const ms = 1500

    for(let urls of lots){

        const promesas = urls.map(url => fetch(url)); //dispara las peticiones
        const respuestas = await Promise.all(promesas);  //espera que esten todas resueltas

        const datos = await Promise.all( //espera que tengamos todos los json
        respuestas.map((r) =>r.json().catch(err=>console.log(err))) 
        ); 

     
        const results = datos.reduce((acc, value)=> {
            acc.push(...value.results)
            return acc
        },[]);

        characters.push(...results)

        console.log(`Esperando ${ms} milisegundos antes del siguiente lote...`)
        
        if (urls != lots[lots.length -1]) await delay(ms)

    }

    return characters
}

module.exports = getdata_rickandmorty;
//const url = 'https://rickandmortyapi.com/api/character';
//getdata_rickandmorty(url).then(data => console.log(data)).catch(err => console.log(err))

