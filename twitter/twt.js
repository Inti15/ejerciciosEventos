// alert("Bienvenido");
document.addEventListener("click", clicks);
var contador = 0;

function clicks() {
  contador++;
  document.getElementById("clicks").innerHTML = contador;

}


var comentario = document.getElementById("comentario");

comentario.addEventListener("keydown", numCaracteres);
comentario.addEventListener("keyup", numCaracteres);

var valor;

function numCaracteres() {
  valor = comentario.value.length;
  longitud();
}
 var long = document.getElementById("longitudTexto");
function longitud() {
  long.innerHTML = valor;
}

function escribir() {
  var tarjetas = document.getElementById("historias");
  var nombre = document.getElementById("nombre");

  var parrafo = document.createElement("p");
  var linea = document.createElement("hr");

  var formatoTexto = "<strong><em>" + nombre.value +"</em></strong>" + " dice: " + comentario.value;

  parrafo.innerHTML = formatoTexto;
  // console.log(formatoTexto);
  tarjetas.appendChild(parrafo);
  tarjetas.appendChild(linea);
  nombre.value = "";
  comentario.value = "";
  // long.innerHTML = 0;
  numCaracteres();
}
