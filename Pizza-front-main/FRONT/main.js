'use strict'

import {getAllPizzas} from"./cliente.js"

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