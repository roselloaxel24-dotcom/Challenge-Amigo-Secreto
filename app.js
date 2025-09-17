//almacenar los nombres
let amigos = [];

//gregar amigos
function agregarAmigo() {
  let input = document.getElementById("amigo"); 
  let nombre = input.value; 

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  //Guardar
  amigos[amigos.length] = nombre;

  //Limpiar
  input.value = "";

  // Mostrar la lista actualizada
  mostrarLista();
}

//Mostrar la lista de amigos
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de dibujar
  lista.innerHTML = "";

  // Recorrer el array y agregar cada nombre
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

//sortear un amigo secreto
function sortearAmigo() {
  // Validacion de amigos
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Seleccionar índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener nombre correspondiente
  let nombreSorteado = amigos[indiceAleatorio];

  // Mostrar resultado en pantalla
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>El amigo secreto es: " + nombreSorteado + "</li>";
}