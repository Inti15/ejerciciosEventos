console.log("Hola!");
var pista = document.getElementById("pista");

function parar() {
  pista.load();
}

function reproducir() {
  console.log("reproduciendo");
  document.getElementById("pista").play();
  console.log(pista.currentTime);
}

function pausa(){
  pista.pause();
}

function retroceder(){
  pista.currentTime -= 10;
}

function avanzar(){
  pista.currentTime += 10;
}

function vol(id){
  console.log(id);
  if(id == "bajar"){
    pista.volume -= 0.1;
  }
  else {
    pista.volume += 0.1;
  }
}
