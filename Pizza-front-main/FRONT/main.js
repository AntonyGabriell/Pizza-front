'use strict'


const pizzaJson = {
  "nome" : "Queijo",
  "valor" : "20,00 R$",
  "descricao" : "Queijo, tomate, orégano"
}




const Pizzas = (pizzaJson) =>{

  const container = document.getElementsById(cardapio)
  const div = document.createElement('div')
  div.classList.add('menu-pizzas')

  const nomePizza = document.createElement('h2')
  nomePizza.textContent = `${pizzaJson.nome}`
  const descricaoPizza = document.createElement('p')
  descricaoPizza = `${pizzaJson.descricao}`
  const valorPizza = document.createElement('p')
  valorPizza = `${pizzaJson.valor}`

  nomePizza.classList('nome-pizza')
  descricaoPizza.classList('menu-ingredientes')
  valorPizza.classList('menu-valor')

  div.appendChild(nomePizza)
  div.appendChild(descricaoPizza)
  div.appendChild(valorPizza)

  container.appendChild(div)

  console.log(Pizzas)

}