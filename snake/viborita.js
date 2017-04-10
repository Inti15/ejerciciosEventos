// Se agrega escucha de enventos para keydown & keyup
document.addEventListener("keydown", moverCuadrito);
// document.addEventListener("keyup", moverCuadrito);
var intervalo;//Variable auxiliar que jecuta una función cada cierto intervalo de tiempo

// Se asignan elementos del html con los id's correspondientes a las variables
var contenedor = document.getElementById("contenedor");
var cuadrito = document.getElementById("cuadrito");
var boton = document.getElementById("reiniciar");

//Se agrega escucha de enventos a la variable boton
boton.addEventListener("click", reiniciar);

//Se establecen coordenadas x,y & longitud de movimiento
var posX = 0;
var posY = 0;
// var posXAnt= 0;
// var posYAnt = 0;
var posXC, posYC = 0;
var movimiento = 25;

// Función que evalua el evento (keyup & keydown)
function moverCuadrito(evento){
  switch(evento.keyCode){
    // Se evalua el código ASCII del evento
    case 38://Caso flecha Ariba
      posY = posY-movimiento; //Se actualiza posición en Y
      comer();//Valida si la 🐍 ha alcanzado la comida
      if (posY<0) {//Se evalua si sale del bordensuperior
        finDelJuego();//Se manda llamar a la función
      }
      else {//En caso de no salir del borde se mueve el cuadro a la posición actual
        cuadrito.style.marginTop = posY+ "px";
      }
    break;

    case 40://Caso flecha Abajo
      posY = posY + movimiento;//Se actualiza posición en Y
      comer();
      if (posY>270) {//Se evalua si sale del borde inferior
        finDelJuego();//Se manda llamar a la función
      }
      else {//En caso de no salir del borde se mueve el cuadro a la posición actual
        cuadrito.style.marginTop = posY+ "px";
      }
    break;

    case 37://Caso flecha Izquierda
      posX = posX - movimiento;//Se actualiza posición en X
    comer();
      if (posX<0) {//Se evalua si sale del borde izquierdo
        finDelJuego();//Se manda llamar a la función
      }
      else {//En caso de no salir del borde se mueve el cuadro a la posición actual
        cuadrito.style.marginLeft = posX+ "px";
      }
    break;

    case 39://Caso flecha Derecha
      posX = posX + movimiento;//Se actualiza posición en X
      comer();
      if (posX>270) {//Se evalua si sale del borde derecho
        finDelJuego();//Se manda llamar a la función
      }
      else {//En caso de no salir del borde se mueve el cuadro a la posición actual
        cuadrito.style.marginLeft = posX+ "px";
      }
    break;

    default://Caso default
      // console.log("otra tecla");
    break;
  }
}
// Función que desabilita el evento de las teclas (flechas) removiendo el escucha de eventos.
function finDelJuego() {
  alert("☠☠☠ Game Over ☠☠☠");
  clearInterval(intervalo);
  document.removeEventListener("keydown", moverCuadrito);
  // document.removeEventListener("keyup", moverCuadrito);
}
//Función que reestablece las condiciones de inicio del juego
function reiniciar() {
// Se reestablece la posición inicial en 0,0
  posX = 0;
  posY = 0;
  cuadrito.style.marginTop = posY;
  cuadrito.style.marginLeft = posX;
 //Se elimina el cuadro de comida antes creado
  contenedor.removeChild(comidaSnake);
  //Se agrega el escucha de eventos(según corresponda el mismo)
  document.addEventListener("keydown", moverCuadrito);
  // document.addEventListener("keyup", moverCuadrito);
  comida();
}

comida();
//Función que muestra la comida cada cierto intervalo de tiempo
function comida(){
  generarComida();
  intervalo = setInterval("eliminarComida()",500);// ejecuta la función eliminarComida cada segundo( 1000 milisegundos)
}

// Función que elimina la comida que se se va creando al generar nueva
function eliminarComida(){
  contenedor.removeChild(comidaSnake);//eliminda el nodo hijo correspondiente con el id = comidaSnake
  generarComida();
}
//Función que genera dinamicamente el div "comida"
function generarComida(){
  var cuadroComida = document.createElement("div");//Se crea el div
  cuadroComida.id = "comidaSnake";
  cuadroComida.setAttribute("style", "width:20px; height:20px; background:#4CAF50; position:inherit;");//Se asigna un stilo al div

  cuadroComida.innerHTML = "🐭";//Se asigna un valor
  aleatorio(0,270);//Manda llamar la función aleatorio con el valor min, max
  //Se actualiza la posión x,y
  cuadroComida.style.marginTop = posYC + "px";
  cuadroComida.style.marginLeft= posXC + "px";
  contenedor.appendChild(cuadroComida);//Se agrega el nuevo nodo al contenedor
}
//Función que genera números aleatorios para las posiciones x,y del div "comida"
function aleatorio(min,max) {
  //Se valida que la posición de la comida sea multiplo del cuadrito(🐍)
  do{
    posXC = parseInt(Math.random() * (max-min) + min);
  }
  while (posXC % movimiento != 0);

  do {
    posYC = parseInt(Math.random() * (max-min) + min);

  } while (posYC % movimiento != 0);

    return posXC, posYC;
}

//Función que valida si la vibora alcanza la comida
// var cont = 0;
// Función que valida si la posición de la 🐍 corresponde con el de la comida (si la ha alcanzado)
function comer(){
  if (posX == posXC && posY == posYC ) {
    // cont ++;
    setTimeout(function(){alert("✌✌✌ Ganaste ✌✌✌");},300);//Ejecuta el alert después de 300 milisegundos
    clearInterval(intervalo);//Limpia el intervalo de la variable
    document.removeEventListener("keydown", moverCuadrito);//Elimina el addEventListener
  }
}

//  var posiciones =[ ];
// function crecer(){
//
// }
