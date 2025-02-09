// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    //Crear Amigo
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else  if (amigos.includes(amigo)) {
        alert("El amigo ya fue agregado");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";

    // Agregar amigo a la lista
    let listaAmigos = document.getElementById("listaAmigos");
    let htmlAmigo = document.createElement("li");
    htmlAmigo.appendChild(document.createTextNode(amigo));
    listaAmigos.appendChild(htmlAmigo);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un amigo.");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}