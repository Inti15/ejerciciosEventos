var elementos =[];
var oper = "";
var resultado = 0;

function numeros(valor) {
  document.getElementById("operacion").value += valor;
  document.getElementById("resultado").value = valor;
}

function operador(operador) {
  document.getElementById("resultado").value = "";
  oper = operador;
}

function almacena() {
  var cadena = document.getElementById("operacion").value ;
  //console.log(cadena);
  console.log(oper);
  elementos = cadena.split(oper);
  console.log(elementos);
  operaciones();
}

function operaciones() {
  switch (oper) {
    case "+":
      resultado = Number(elementos[0]) + Number(elementos[1]);
      console.log(resultado);
      escribirResultado(resultado);
      break;
    case "-":
      resultado = Number(elementos[0]) - Number(elementos[1]);
      escribirResultado(resultado);
      break;
    case "*":
      resultado = Number(elementos[0]) * Number(elementos[1]);
      escribirResultado(resultado);
      break;
    case "/":
      resultado = Number(elementos[0]) / Number(elementos[1]);
      escribirResultado(resultado);
      break;
    case "mod":
      resultado = Number(elementos[0]) % Number(elementos[1]);
      escribirResultado(resultado);
      break;
    case "^":
      resultado = Math.pow(Number(elementos[0]),Number(elementos[1]));
      escribirResultado(resultado);
      break;
    case "CA":
      document.getElementById("operacion").value = " ";
      resultado = " ";
      break;
    default:
    alert("Ingresa una operación válida")
 }

}

function escribirResultado(resultado) {
  document.getElementById("resultado").value = resultado;

}
