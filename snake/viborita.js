// console.log("Bienvenido");
document.addEventListener("keydown", moverCuadrito);

var cuadrito = document.getElementById("cuadrito");
var boton = document.getElementById("reiniciar");

boton.addEventListener("click", reiniciar);

var posX = 0;
var posY = 0;
var movimiento = 45;

function moverCuadrito(evento){
  switch(evento.keyCode){

    case 38://Ariba
      posY = posY-movimiento;
      if (posY<0) {
        finDelJuego();
      }
      else {
        cuadrito.style.marginTop = posY+ "px";
      }
    break;

    case 40://Abajo
      posY = posY + movimiento;
      if (posY>270) {
        finDelJuego();
      }
      else {
        cuadrito.style.marginTop = posY+ "px";
      }
    break;

    case 37://Izquierda
      posX = posX - movimiento;
      if (posX<0) {
        finDelJuego();
      }
      else {
        cuadrito.style.marginLeft = posX+ "px";
      }
    break;

    case 39://Derecha
      posX = posX + movimiento;
      if (posX>270) {
        finDelJuego();
      }
      else {
        cuadrito.style.marginLeft = posX+ "px";
      }
    break;

    default:
      console.log("otra tecla");
    break;
  }
}

function finDelJuego() {
  alert("Game Over");
  document.removeEventListener("keydown", moverCuadrito);
}

function reiniciar() {
  posX = 0;
  posY = 0;
  cuadrito.style.marginTop = posY;
  cuadrito.style.marginLeft = posX;
  document.addEventListener("keydown", moverCuadrito);

}
