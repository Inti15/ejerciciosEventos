function Pokemon(nombre, color, ptsAtaque) {
  this.name = nombre;
  this. color = color;
  this.nivelAmistad = 0;
  this.vida = 100;
  this.ptsAtaque = ptsAtaque;

  this. saludar = function () {
    console.log("Hola, me llamo "+ this.name);
  };

  this.pelear = function(pokemonObj){
    pokemonObj.vida = pokemonObj.vida - this.ptsAtaque;
  }
  this.beber = function(tipoBebida){
    if(tipoBebida == "chelas"){
      this.nivelAmistad += 80;
    }
    else if(tipoBebida == "vodka"){
      this.nivelAmistad += 10;
    }
  }

}

var pokemons = [];

function crearPokemon() {
  var nombre = document.getElementById("nombre");
  var color = document.getElementById("color");
  var ataque = document.getElementById("ataque");

  var pokemon = new Pokemon(nombre.value,color.value,parseInt(ataque.value));
  pokemons.push(pokemon);
  console.log(pokemon);
  nombre.value = "";
  color.value ="";
  ataque.value ="";
  mostrarPokemons();
}

function mostrarPokemons() {
  var listaPok = document.getElementById("listaPokemones");
  var lista = document.createElement("ol");
  listaPok.innerHTML = "";

  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("li");//se puede sacar esta linea de código del forEach
    elemento.innerHTML = "<strong>Nombre: </strong>"+ pokemon.name + "<strong> Color: </strong>"+ pokemon.color + "<strong> Ataque: </strong>"+ pokemon.ptsAtaque;
    lista.appendChild(elemento);
  });
  listaPok.appendChild(lista);

}

var playerA, playerB, opcA,opcB;

function listas() {
  var seccionDuelos = document.getElementById("duelos");
  var tituloDuelo = document.createElement("h2");

  seccionDuelos.innerHTML ="";

  seccionDuelos.appendChild(tituloDuelo);
  tituloDuelo.innerText = "¡Es hora del duelo!!!";

  playerA = document.createElement("select");
  playerB = document.createElement("select");
  // var boton = document.createElement("button");
  // boton.innerText = "Pelea";
  // boton.onclick = duelos();

  pokemons.forEach(function (pokemon) {
    opcA = document.createElement("option");
    opcB = document.createElement("option");
    opcA.innerText = pokemon.name;
    opcB.innerText = pokemon.name;
    playerA.appendChild(opcA);
    playerB.appendChild(opcB);
  });
  seccionDuelos.appendChild(playerA);
  seccionDuelos.appendChild(playerB);
  // seccionDuelos.appendChild(boton);

}

function duelos(){
  console.log("peleando");
  var pok1 = playerA.value;
  var pok2 = playerB.value;
  var pokA = {};
  var pokB = {};
  // console.log(pok1);
  // console.log(pok2);
  pokemons.filter(function (pokemon) {
      if(pok1 == pokemon.nombre){
         pokA = pokemon;
      }
  });

  pokemons.filter(function (pokemon) {
      if(pok2 == pokemon.nombre){
         pokB = pokemon;
      }
  });
  // pokA.pelear(pokB);
  // console.log(pokB.vida);
  alert("Disculpe las molestias, nuestro servicio está teniendo problemas técnicos. Intentelo más tarde.");
}
// var pikachu = new Pokemon("Pikachu", "amarillo",80);
// var charmander = new Pokemon("Charmander","rojo",30);
//
// console.log(pikachu);
// console.log(charmander);
//
// // console.log(pikachu.nivelAmistad);
// // console.log(charmander.nivelAmistad);
//
// pikachu.beber("chelas");
// charmander.beber("vodka");
//
// pikachu.pelear(charmander);
//
// console.log(charmander.vida);
