const delay = async (ms) => {
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

async function getdata_rickandmorty (url){
    let max_pages;
    try{
        const res = await fetch(url);
        const json = await res.json();
        max_pages = json.info.pages;
    }catch(err){
        console.log("Error al obtener el numero de paginas maximo.", err)
        return null
    }

    const block_pages = []
    const interval = 5;

    let actual_page = 1
    while(actual_page < max_pages){ 
        block = []
        for(let i = 1; i<=interval;i++){
            block.push(`https://rickandmortyapi.com/api/character?page=${actual_page}`)
            if(actual_page == max_pages) break;
            actual_page++;
        }
        block_pages.push(block)
        
    }

    const data = []
    ms = 2000
    for(let urls of block_pages){

        const promesas = urls.map(url => fetch(url));
        const respuestas = await Promise.all(promesas);

        const datos = await Promise.all(
        respuestas.map((r) =>r.json())
        ); 


        const results = datos.reduce((acc, value)=> {
            acc.push(...value.results)
            return acc
        },[]);

        data.push(...results)

        console.log(`Esperando ${ms} milisegundos antes de las siguientes ${interval} paginas`)
        await delay(ms)

    }

    return data
}

module.exports = getdata_rickandmorty;
//const url = 'https://rickandmortyapi.com/api/character';
//getdata_rickandmorty(url).then(data => console.log(data)).catch(err => console.log(err))

