// alert("Bienvenido");
  document.getElementById("areaComentario").value = "";
var parrafo = document.getElementById("verComentario"); //Se obtiene el parrafo que almacena todo el comentario introducido por el usuario
var estilo = parrafo.style; //Variable que obtiene el estilo de la variable parrafo.
var cont = 0;// Contador iniciado en cero

//Se puede usar .insetBefore para agregar el comentario actual antes que los demas
function agregarComentario() {//Función que agrega los comentarios en la sección de articulos del HTML
  cont++;// Cada que se ejecuta la función el contador aumenta en 1 (sirve como id para el número de comentario) ----> se puede usar Date.now()
  // console.log(cont);
  var estilo = parrafo.getAttribute("style");// Se obtiene los estilos asignados por el usuario(mediante getAttribute) al parrafo que contiene el comentario
  var comentarioAgregado = document.getElementById("verComentario").innerHTML;//Se obtiene el comentario introducido por el usuario
  // Se escribe en el div(con el id ="historialComentarios" ) creando una etiqueta <p con ide coment + el valor del contador> además se le concatena el comentario del usuario, también se crea el boton para borrar el comentario (mandando llamar la funcion borrarComentario(le manda el elemento en el que se encuentra))
  document.getElementById("historialComentarios").innerHTML += "<div style='background-color:#ffffff;width: 70%;'><hr/><p id='coment"+cont+"' style='"+estilo+"'>" + comentarioAgregado + "</p><br/><input type='button' value='Borrar' align='right' onclick='borrarComentario(this);' /></div>"; // Se puede usar createElement
  document.getElementById("areaComentario").value = "";// Se limpia el textArea(id = areaComentario) del html
  document.getElementById("verComentario").innerHTML ="";//Se limpia el parrafo(id = verComentario) que muestra la vista previa del comentario
}

function borrarComentario(varElemento) {//Función que recibe el elemento (<input>) de la linea 13
  console.log(varElemento);
  // document.getElementById("coment"+cont).parentNode.innerHTML = "";
  varElemento.parentNode.innerHTML ="";//Se obtiene el padre del <input> (parrafo con id = coment + comentario) se limpia asignando una cadena vacia.
}

function escribir(comentario) {//Funció que recibe el comentario del textArea (id="areaComentario")
  document.getElementById("verComentario").innerHTML = comentario; // Se asigna el comentario en el parrafo con id = verComentario
}

function texto(size) { //Recibe la palabra del id según sea el caso del boton (big, med, small)
  console.log(size);
  if(size == "big"){//Primer caso de size
    //parrafo.setAttribute("style","font-size:large");
    estilo.fontSize = "large"; //Se asigna fontSize al estilo y se le da el valor de large
  }
  else if (size == "med") {//Segundo caso de size
    estilo.fontSize = "medium";//Se asigna fontSize al estilo y se le da el valor de medium
  }
  else{//Cualquier otro caso (3er caso) de size
    estilo.fontSize = "small";//Se asigna fontSize al estilo y se le da el valor de small
  }
}

function colorParrafo(elemento){//Recibe el id del boton  (Color texto / color fondo) según sea el caso.
  console.log(elemento);
  var codigoColor ="";//Se crea variable vacia que almacenará el hexadecimal del color ingresado.
  codigoColor = prompt("Ingresa el código hexadecimal de tu color favorito:") //Se guarda el valor hexadecimal, se guarda en codigoColor
  if(elemento == "text"){//Primer caso si el id concuerda con text
    estilo.color = codigoColor;//Se asigna propiedad color y se le da el valor de codigoColor
  }
  else {//Cualquier otro caso(segundo id = fondo)
    // parrafo.setAttribute("style","background-color:"+codigoColor);
    estilo.backgroundColor = codigoColor;//Se asigna propiedad backgroundColor y se le da el valor de codigoColor
  }
}

function alinear(posicion){//Recibe el id del boton (Alinear izquierda / centrar / derecha)
  console.log(posicion);
  if(posicion == "izq"){//Se evalua el  primer caso id = izq
    estilo.textAlign = "left";//Se asigna la propiedad textAlign al estilo y se le asigna valor
  }
  else if (posicion == "cen") {//Se evalua el  primer caso id = cen
    estilo.textAlign = "center";//Se asigna la propiedad textAlign al estilo y se le asigna valor
  }
  else{//Se evalua último caso ( id= der)
    estilo.textAlign = "right";//Se asigna la propiedad textAlign al estilo y se le asigna valor
  }
}

function agregar(tipo){//Recibe id del boton (img / lista) según sea el caso
  console.log(tipo);
  if (tipo == "img") {//Primer caso (id = img)
    var imagen = prompt("Inserta la url de tu imagen:"); // Se guarda el url de la imagen ingresado por el usuario
    parrafo.innerHTML += "<br/><img src='"+imagen+"' />";// Se agrega la imagen en el comentario del usuario
  }
  else {//Segundo caso id = lista
    parrafo.innerHTML += "<ol id='listaComentario'> </ol>";//Se crea una lista ordenada dentro del parrafo (se aasigna un id)
    var items = prompt("¿Cuántos elementos quieres agregar a tu lista?: ");//Se pregunta el numero de items
    for(var i = 1; i<=items; i++){//Ciclo que se ejecuta el número de veces de items a agregar
      var elementosLista = prompt("Ingresa el elemento "+i+" de tu lista: ");//Se guarda el valor de cada item
      document.getElementById("listaComentario").innerHTML += "<li>"+ elementosLista + "</li>";//Se crean los items con su valor respectivo dentro de la lista
    }
  }
}
