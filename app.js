let inputName = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");
let amigoSorteado = "";


function mensajeInicial(){
    asignarTextoElemento('h2', 'Hola, escribe tu nombre.');
}

function limpiarLista(){//limpia lista de amigos y resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    listaAmigos = [];
    amigoSorteado = "";
    return;

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
        asignarTextoElemento('h2', 'Gracias por jugar!!!');
        //alert("gracias por participar!!!");
        listaAmigos.push(inputName.value); 
        ulListaAmigos.innerHTML += `<li>${inputName.value}</li>`;
        limpiarCaja();
       
    }else{
       asignarTextoElemento('h2', 'Ingresa tu nombre, no seas Aguafiestas!!!');
        //alert("Por favor ingresa tu nombre, no seas aguafiestas!!!");
    }
    setTimeout(mensajeInicial, 2000);
    return

      
}  

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    asignarTextoElemento('h2', 'ya fueron todos sorteados, no hay mas amigos.');
    ulresultado.innerHTML = '';
    limpiarLista();
    setTimeout(mensajeInicial, 2500);
    return;
  }

  let random = Math.floor(Math.random() * listaAmigos.length);
  let amigoSecreto = listaAmigos[random];
  ulresultado.innerHTML = `<li>tu amigo secreto : ${amigoSecreto} !!!</li>`;
  listaAmigos.splice(random, 1);
  limpiarCaja();
  asignarTextoElemento('h2', 'Comprale un lindo regalo a:');
  setTimeout(mensajeInicial, 2000);
  return;
  
}

mensajeInicial();




