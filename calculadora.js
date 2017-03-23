var elementos =[];
var oper = "";
var cadena = "";

function numeros(valor) {
  document.getElementById("operacion").value += valor;
   cadena =document.getElementById("operacion").value;
  document.getElementById("resultado").value = valor;
  elementos.push(document.getElementById("resultado").value);
  // console.log("numeros");
}

function operador(operador) {
  // document.getElementById("operacion").value += valor
  // var cifra = document.getElementById("resultado").value
  // var operacion = cifra + operador;

  document.getElementById("resultado").value = "";
  // elementos.push(operador);
  // console.log(elementos);
  //console.log(eval(cifra));
  // operaciones(operador);
  oper = operador;
  // almacena(operador);
}

function almacena(oper) {
  // var cadena = document.getElementById("operacion").value ;
  console.log(cadena);
  console.log(oper);
  var nums = cadena.split(oper);
  console.log(nums);

}
// function operaciones(operador) {
//   // switch (operador) {
//   //   case expression:
//   //
//   //     break;
//   //   default:
//
//   // }
//
//
// }
//   var resultado = elementos[0]
