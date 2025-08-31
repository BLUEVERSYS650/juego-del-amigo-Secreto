let inputName = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");

function condicionesIniciales(){
    asignarTextoElemento('h2', 'Hola, escribe tu nombre y apellido');
}


function limpiarCaja() {
    inputName.value = ""; // Limpiamos el input
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    if(inputName.value){
        asignarTextoElemento('h2', 'Gracias por participar!!!');
        //alert("gracias por participar!!!");
        listaAmigos.push(inputName.value); 
        ulListaAmigos.innerHTML += `<li>${inputName.value}</li>`;
        limpiarCaja();
        
    }else{
       asignarTextoElemento('h2', 'Ingresa tu nombre, no seas Aguafiestas!!!');
        //alert("Por favor ingresa tu nombre, no seas aguafiestas!!!");
    }
    setTimeout(condicionesIniciales, 2000);
    return
      
}  
  

function sortearAmigo(){
    let random = Math.floor(Math.random() * listaAmigos.length);
    //alert(`Tu amigo secreto es: ${listaAmigos[random]}`);
    let amigoSecreto = listaAmigos[random];
    ulresultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    listaAmigos.splice(random, 1);
    asignarTextoElemento('h2', 'Gracias por participar, compra un lindo regalo!!!');
    setTimeout(condicionesIniciales, 2500);
    return
    
}

condicionesIniciales();



