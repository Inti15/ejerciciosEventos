var pista, progresoBarra, segundos,duracionTotal;

function cargarPagina() {
  console.log("Hola!");
  pista = document.getElementById("pista");
  progresoBarra = document.getElementById("progreso");
  segundos = document.getElementById("segundos");
  //  duracionTotal =  pista.duration;
  // console.log(duracionTotal);
  segundos.innerHTML = pista.currentTime + " / " + pista.duration;
}

function convertirMinutos(tiempo) {
  console.log(tiempo);
  var seg = Math.round(tiempo);
  // console.log(seg);
}

function parar() {
  pista.load();

  segundos.innerHTML = pista.currentTime + " / " + pista.duration;
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
  convertirMinutos(pista.currentTime);
}
