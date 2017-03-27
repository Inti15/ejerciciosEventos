// alert("Bienvenido");
  document.getElementById("areaComentario").value = "";
var parrafo = document.getElementById("verComentario"); //Se obtiene el parrafo que almacena todo el comentario introducido por el usuario
var estilo = parrafo.style; //Variable que obtiene el estilo de la variable parrafo.
var cont = 0;// Contador iniciado en cero

function agregarComentario() {//Función que agrega los comentarios en la sección de articulos del HTML
  cont++;// Cada que se ejecuta la función el contador aumenta en 1 (sirve como id para el número de comentario)
  // console.log(cont);
  var estilo = parrafo.getAttribute("style");// Se obtiene los estilos asignados por el usuario(mediante getAttribute) al parrafo que contiene el comentario
  var comentarioAgregado = document.getElementById("verComentario").innerHTML;//Se obtiene el comentaio introducido por el usuario
  // Se escribe en el div(con el id )
  document.getElementById("historialComentarios").innerHTML += "<div style='background-color:#ffffff;width: 70%;'><hr/><p id='coment"+cont+"' style='"+estilo+"'>" + comentarioAgregado + "</p><br/><input type='button' value='Borrar' align='right' onclick='borrarComentario(this);' /></div>";
  document.getElementById("areaComentario").value = "";
  document.getElementById("verComentario").innerHTML ="";
}

function borrarComentario(varElemento) {
  console.log(varElemento);
  // document.getElementById("coment"+cont).parentNode.innerHTML = "";
  varElemento.parentNode.innerHTML ="";
}

function escribir(comentario) {
  document.getElementById("verComentario").innerHTML = comentario;
}

function texto(size) {
  console.log(size);
  if(size == "big"){
    //parrafo.setAttribute("style","font-size:large");
    estilo.fontSize = "large";
  }
  else if (size == "med") {
    estilo.fontSize = "medium";
  }
  else{
    estilo.fontSize = "small";
  }
}

function colorParrafo(elemento){
  console.log(elemento);
  var codigoColor ="";
  codigoColor = prompt("Ingresa el código hexadecimal de tu color favorito:")
  if(elemento == "text"){
    estilo.color = codigoColor;
  }
  else {
    // parrafo.setAttribute("style","background-color:"+codigoColor);
    estilo.backgroundColor = codigoColor;
  }
}

function alinear(posicion){
  console.log(posicion);
  if(posicion == "izq"){
    estilo.textAlign = "left";
  }
  else if (posicion == "cen") {
    estilo.textAlign = "center";
  }
  else{
    estilo.textAlign = "right";
  }
}

function agregar(tipo){
  console.log(tipo);
  if (tipo == "img") {
    var imagen = prompt("Inserta la url de tu imagen:");
    parrafo.innerHTML += "<br/><img src='"+imagen+"' />";
  }
  else {
    parrafo.innerHTML += "<ol id='listaComentario'> </ol>";
    var items = prompt("¿Cuántos elementos quieres agregar a tu lista?: ");
    for(var i = 1; i<=items; i++){
      var elementosLista = prompt("Ingresa el elemento "+i+" de tu lista: ");
      document.getElementById("listaComentario").innerHTML += "<li>"+ elementosLista + "</li>";
    }
  }
}
