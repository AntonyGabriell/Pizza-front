'use strict'

import {getAllPizzas, getAllBebidas} from"./cliente.js"

const pizzas = await getAllPizzas()

const putProduto =(dados)=>{
  const div = document.getElementById('menu-pizzas')

  const h2 = document.querySelector('.nome-pizza')
  h2.textContent = dados.nomePizza

  const pIngrediente = document.querySelector('.menu-ingredientes')
  pIngrediente.textContent = dados.descricaoPizza

  const pValor = document.querySelector('.menu-valor')
  pValor.textContent = dados.valorPizza

  div.appendChild(h2)
  div.appendChild(pIngrediente)
  div.appendChild(pValor)

  return div
}

const pesquisar = async()=>{
  const get = document.getElementById('menu-pizzas')
  const pizza = pizzas.map(putProduto)
  get.replaceChildren(...pizza)
}

console.log(await pesquisar())

await pesquisar()




const bebidas = await getAllBebidas()

const putProdutoBebida =(dados)=>{
  const div = document.getElementById('menu-bebidas')

  const h2 = document.querySelector('.nome-bebida')
  h2.textContent = dados.nomeBebida

  const pDesc = document.querySelector('.menu-desc-bebida')
  pIngrediente.textContent = dados.descricaoPizza

  const pValor = document.querySelector('.menu-valor-bebida')
  pValor.textContent = dados.valorbebida

  div.appendChild(h2)
  div.appendChild(pDesc)
  div.appendChild(pValor)

  return div
}

const pesquisarBebida = async()=>{
  const get = document.getElementById('menu-bebidas')
  const bebida = bebidas.map(putProdutoBebida)
  get.replaceChildren(...bebida)
}

console.log(await pesquisarBebida())

await pesquisarBebida()