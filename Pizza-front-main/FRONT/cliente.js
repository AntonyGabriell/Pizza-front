'use strict'

const getAllPizzas = async()=>{
    const url = 'http://localhost:1313/v1/allpizzas'

    const response = await fetch(url)

    const pizzas = response.json()

    return pizzas
}

export{
    getAllPizzas
}

const getAllBebidas = async()=>{
    const url = 'http://localhost:1313/v1/allbebidas'

    const response = await fetch(url)

    const bebidas = response.json()

    return bebidas
}

export{
    getAllPizzas,
    getAllBebidas
}