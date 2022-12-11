

const pizzasJson = {
"nome" : "Carne com queijo",
"valor" : "15.50",  

    "ingrediente":[{
        "id_ingrediente": 1, 
        "nome": "queijo parmesão" 
}] }

const divPizzas = document.querySelector('#menu-pizzas')

async function consultaPizzas () {
  const retorno = await fetch(pizzasJson)
  const pizzas = await retorno.json()
  preencheTela(pizzas)
}

function preencheTela (pizzas) {
  pizzas.forEach(pizzasJson => {
    const novaPizza = `
    <div id="menu-pizzas">
    <h2 class="nome-pizza">${pizzasJson.nome}</h2>
    <p class="menu-ingredientes">${pizzasJson.ingrediente}</p>
    <p class="menu-valor">${pizzasJson.valor}R$</p>
  </div>
    `
    divPizzas.innerHTML = divPizzas.innerHTML + novaPizza
  })
}

consultaPizzas()