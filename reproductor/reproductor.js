console.log("Hola!");
var pista = document.getElementById("pista");
var progresoBarra = document.getElementById("progreso");
var segundos = document.getElementById("segundos");
// var duracionTotal =  pista.duration;
// console.log(duracionTotal);
segundos.innerHTML = pista.currentTime + " / " + pista.duration;
function parar() {
  pista.load();

  segundos.innerHTML = pista.currentTime + " / " + duracionTotal;
}

function reproducir() {
  // console.log("reproduciendo");
  document.getElementById("pista").play();
  progresoBarra.max = pista.duration;
  // console.log(pista.currentTime);
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
  // console.log(id);
  if(id == "bajar"){
    pista.volume -= 0.1;
  }
  else {
    pista.volume += 0.1;
  }
}

function mostrarProgreso(){
  // console.log(pista.currentTime);
  // console.log(pista.duration);
  progresoBarra.value = pista.currentTime;
  segundos.innerHTML = pista.currentTime + " / " + pista.duration;
}
