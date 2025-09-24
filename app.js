// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variable tipo array - Almacenará los nombres de los amigos ingresados

let listaAmigos = [];

//Implementación de funcíon para agregar amigos
function agregarAmigos() {
    let inputAmigo = document.getElementById("inputAmigo");
    let nombreAmigo = inputAmigo.value.trim(); //Elimina espacios al principio y al final

    //Valida que el campo no esté vacío
    if (nombreAmigo == "") {
        alert("El campo no debe estar vacío. Ingrese un nombre por favor.");
        return;
    }

    //Agregarel nombre a el array listaAmigos
    listaAmigos.push(nombreAmigo);

    //Actualiza la lista que se visualiza en la página
    actualizarLista();

    //Limpia el campo de entrada
    document.getElementById("inputAmigo").value="";
}

//Función para actualizar la lista mostrada en página
function actualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; //limpia el contenido
    for (let i = 0; i < listaAmigos.length; i++) {
        let nombre = document.createElement("nombre");
        nombre.innerHTML = "<li>" + listaAmigos[i] + "</li>";
        lista.appendChild(nombre);
    }
}

//Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Debes agregar por lo menos un nombre para realizar el sorteo.");
        return;
    }
let indice = Math.floor(Math.random() * listaAmigos.length);
let amigo = listaAmigos[indice];

//Muestra el resultado del sorteo
let resultado = document.getElementById("resultado");
resultado.textContent = `El amigo secreto es: ${amigo}`;
}
