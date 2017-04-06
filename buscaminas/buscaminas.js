//NOTA: se puede usar el atributo diysplay = block/none para ocultar o mostrar elementos

document.addEventListener("click", clicks);//Escucha el evento click dentro del documento (al ejecutarse manda llamar la función clicks)

var tabla = document.getElementById("tabla");//Manda llamar al elemento del html que conduerde con el id
tabla.addEventListener("click", noClicks);//Se asigna a la varia tabla un escucha de eventos (click)que ejecuta la función correspondiente

function clicks() {//Muestra el mensaje del alert al usuario (miestras el juego no haya terminado)
  alert(" 🎮 Sigue jugando 🎮");
}

function noClicks(){//Detiene el flujo de eventos(ejecución de la fucnión clicks) cuando el evento sucede dentro del elemento tabla
  event.stopPropagation();
}

var i; //Variable global para los ciclos for
function cambiaColor(boton) {//Agrega el atributo style a la variable boton y cambia el color de fondo
  boton.setAttribute("style", "background-color:#607D8B;");
}

var bomba = document.getElementsByClassName("boom");//Variable que guarda el arreglo de los elementos que concuerden con la clase correspondiente
for(i=0; i<bomba.length;i++){//Ciclo que itera el arreglo bomba
  bomba[i].addEventListener("click", mostrarBombas);//Se agrega un escucha de eventos (click) que ejecuta la función mostrarBombas
}

function mostrarBombas(){//Itera el arreglo bomba, modifica el valor de cada uno de los elementos
  for(i=0; i<bomba.length;i++){
    bomba[i].value = "💣";
  }
  setTimeout(function(){alert("☠ ☠ ☠ G A M E   O V E R ☠ ☠ ☠");},500);//Se muestra un alert con el mensaje "Game over" con un retraso de 500 milisegundos
  noWork(); //Manda llamar la función noWork();
}

function noWork() {
  var funcionalidad = document.getElementsByTagName("input");//Obtiene todos los elementos del html que concuerden con la etiqueta <input>
  for(i=0; i<funcionalidad.length;i++){//Itera el arreglo funcionalidad
    funcionalidad[i].disabled = true; //Deshabilita la funcionalidad de los elementos del arreglo
  }
  document.removeEventListener("click", clicks);//Remueve el escucha de eventos del document (con el evento y la función que ejecuta)
}

var numero = document.getElementsByClassName("numero");//Obtiene todos los elementos del html que concuerden con la clase correspondiente
for(i=0; i<numero.length;i++){//Itera el arreglo numero
  numero[i].addEventListener("click", mostrarNum);//Se agrega un escucha de eventos (click) que ejecuta la función mostrarNum
}

function mostrarNum(numero) {//Recibe el elemento en el que se está ejecutando el evento
  numero.toElement.value = numero.toElement.name; //Asigna al valor del elemento el nombre del mismo elemento

}

var enviar = document.getElementById("enviar");//Obtiene el elemento del html que concuerde con el id correspondiente
enviar.addEventListener("click", reiniciar);//Se agrega un escucha de eventos (click) que ejecuta la función reiniciar

function reiniciar(){
  location.reload();//Recarga la pagina web.
}
