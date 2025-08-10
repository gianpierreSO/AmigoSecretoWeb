// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo").value;
    if(nuevoAmigo=='' || nuevoAmigo==""){
        alert("Por favor, inserte un nombre")
    }
    else{
        amigos.push(nuevoAmigo)
        document.querySelector('#amigo').value = '';
        actualizarAmigos()
    }
    
    return;
}

function actualizarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido anterior
    // Recorrer el array y agregar cada amigo como <li>
    let listaHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = listaHTML;
}

function sortearAmigo() {
    if(amigos.length===0){
        alert("Agrega amigos para sortear");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
}


let amigos = []

