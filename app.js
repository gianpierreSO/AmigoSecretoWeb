// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo").value;
    if(nuevoAmigo=='' || nuevoAmigo==""){
        alert("Por favor, inserte un nombre")
    }
    else{
        amigos.push(nuevoAmigo)
        document.querySelector('#amigo').value = '';
    }
}




let amigos = []

