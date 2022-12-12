'use strict'


const pizzaJson = {
  "nome" : "Queijo",
  "valor" : "20,00 R$",
  "descricao" : "Queijo, tomate, orégano"
}


const menuPizzas = async function () {
  const pizzas =  `
    <div id="menu-pizzas">
    <h2 class="nome-pizza">${pizzaJson.nome}</h2>
    <p class="menu-ingredientes">${pizzaJson.descricao}</p>
    <p class="menu-valor">${pizzaJson.valor}R$</p>
  </div>
    `
}
console.log(menuPizzas)

const  handleClicker = (event) =>{
  if (event.handleClicker){
      menuPizzas()
  }
}

document.getElementById ('button-cards')
.addEventListener('click', handleClicker)