document.addEventListener("click", clicks);

// var pagina = document.getElementById("cuerpo");

 var tabla = document.getElementById("tabla");
tabla.addEventListener("click", noClicks);

function clicks() {
  alert(" 🎮 Sigue jugando 🎮");
}

function noClicks(){
  event.stopPropagation();
}

var i;
function cambiaColor(boton) {
  boton.setAttribute("style", "background-color:#607D8B;");
}

var bomba = document.getElementsByClassName("boom");
for(i=0; i<bomba.length;i++){
  bomba[i].addEventListener("click", mostrarBombas);
}

function mostrarBombas(){
  for(i=0; i<bomba.length;i++){
    bomba[i].value = "💣";
  }
  setTimeout(function(){alert("☠ ☠ ☠ G A M E   O V E R ☠ ☠ ☠");},500);
  noWork();
}

function noWork() {
  var funcionalidad = document.getElementsByTagName("input");
  for(i=0; i<funcionalidad.length;i++){
    funcionalidad[i].disabled = true;
  }
  document.removeEventListener("click", clicks);
}

var numero = document.getElementsByClassName("numero");
for(i=0; i<numero.length;i++){
  numero[i].addEventListener("click", mostrarNum);
}

function mostrarNum(numero) {
  numero.toElement.value = numero.toElement.name;

}

var enviar = document.getElementById("enviar");
enviar.addEventListener("click", reiniciar);
function reiniciar(){
  location.reload();
}
