// alert("Bienvenido");
var valor;//Variable que contendrá el número de caracteres del comentario ingresado.
var contador = 0;//Contador que arroja el numero de clicks que se han hecho en la página.

// Se asigna en variables los elementos del html identificados con el id correspondiente.
var comentario = document.getElementById("comentario");
var nombre = document.getElementById("nombre");
var boton = document.getElementById("boton");
var long = document.getElementById("longitudTexto");

//Se crea el escucha de eventos a cada una de las variables creadas en la sección anterior
document.addEventListener("click", clicks);//Se ejecuta la función clicks() cada que hay un click en la pagina
comentario.addEventListener("click", noClicks);//Se ejecuta la función noClicks() cada que hay un click en la variable comentario
nombre.addEventListener("click", noClicks);//Se ejecuta la función noClicks() cada que hay un click en la variable nombre
boton.addEventListener("click", noClicks);//Se ejecuta la función noClicks() cada que hay un click en la variable boton

//Función que lleva la cuenta de los clicks
function clicks() {
  contador++;//Se incrementa el contador cada que ingresa a la función
  document.getElementById("clicks").innerHTML = contador;
}
// Función que desabilita la cuenta de clicks
function noClicks(){
  event.stopPropagation();
}

// //Se crea el escucha de eventos para la variable comentario, mandan llamar la función numCaracteres();
comentario.addEventListener("keydown", numCaracteres);
comentario.addEventListener("keyup", numCaracteres);

// Función que crea el formato de cómo se mostrará el texto de los comentarios.
function escribir() {
  var tarjetas = document.getElementById("historias");

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

//Función que obtiene la longitud del texto ingresado por el usuario
function numCaracteres() {
  valor = comentario.value.length;
  longitud();
}

//Función que escribe el valor de la longitud del comentario en el elemento HTML correspondiente. 
function longitud() {
  long.innerHTML = valor;
}
