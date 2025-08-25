/let inputName = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");
//let amigoSorteado = miLista.shift();

function agregarAmigo(){
    if(inputName.value){
         alert("gracias por participar!!!");
        //ulListaAmigos.innerHTML = "gracias por participar!!!";
    }else{
       alert("Por favor ingresa tu nombre, no seas aguafiestas!!!");
    } 
    listaAmigos.push(inputName.value);
    //console.log(listaAmigos);
    ulListaAmigos.innerHTML += `<li>${inputName.value}</li>`;
    limpiarCaja();
    return
    
}   

function limpiarCaja() {
    inputName.value = ""; // Limpiamos el input

} 
    
    function sortearAmigo(){
    let random = Math.floor(Math.random() * listaAmigos.length);
    //alert(`Tu amigo secreto es: ${listaAmigos[random]}`);
    let amigoSecreto = listaAmigos[random];
    ulresultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    listaAmigos.splice(random, 1);
    return
    
}



