let getdata_rickandmorty = async (url) =>{
    let res = await fetch(url).catch(err => {console.log(err); return null})

    if (res == null) return null
    
    await delay(500) //Espera antes de la siguiente peticion para reducir riesgo de recibir un 429
  
    if (res.ok){
        let response = await res.json()
        let results = response.results
        return [results, response.info['next']]
    }else { 
        console.log(res)
        return null
    }
}

async function delay(ms) {
    return new Promise((resolve)=> setTimeout(resolve,ms))
}

async function main(url){ 
const start = performance.now();
const data = []

//Siempre que next sea una pagina entra al loop
while(url){
    console.log("Obteniendo datos de "+ url)

    const arr = await getdata_rickandmorty(url) //llama a la pagina
    if (arr == null) return console.log("Se ha detenido antes de obtener todas las paginas") // en caso de que no devuelva una pagina

    console.log("Datos obtenidos de "+ url)

    data.push(...arr[0]) //guarda la info de los personajes
    url = arr[1] //obtiene la siguiente pagina
}
    const end = performance.now();
    console.log(`La consulta secuencial ha tardado: ${end-start} ms`)
    console.log("Se han obtenigo todas las paginas")
    return data
}

module.exports = main;