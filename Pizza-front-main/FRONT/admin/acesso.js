

'use strict'

const login = {
    usuario: 'root',
    senha: '123'
}

const testeLogin = () => {

    const form = document.querySelector('form')
    const usuario = document.getElementById('user').value
    const senha = document.getElementById('password').value

    if (form.reportValidity()) {
        
        if (login.usuario == usuario && login.senha == senha) {

            window.location.href = '../admin/telas/dash.html'
    
        }else{
            alert('ta errado, o login é root e a senha 123')
        }
    }

}

document.getElementById("botao-enviar").addEventListener('click', () => {
    testeLogin()
})