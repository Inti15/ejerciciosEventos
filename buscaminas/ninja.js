document.addEventListener("click", verMensaje);

function verMensaje(){
  alert("Sigue jugando");
}

function generarTab(n) {
  var nvaTab = document.createElement("table");
  nvaTab.border = "1";
  for(var i = 1; i<=n; i++){
    var tr = document.createElement("tr");
    for (var k = 1; k <= n; k++) {
      var td = document.createElement("td");
      var bot = document.createElement("button");
      var p = document.createElement("p");

      bot.className = "celdaBoton";
      bot.innerText = "Click";

      td.innerText="vacio";
      td.appendChild(p);

      td.setAttribute("data-cell-type","empty");

      tr.appendChild(td);

      // var nvoTextDep = document.createTextNode("vacio")
      // bot.appendChild(nvoTextDep);
      }
    }
    nvaTab.appendChild(tr);
  }
  return nvaTab;
}
