var bandera = false; //indica si el juego inicio
var turno = 0; // determina el turno de los jugadores
var tab = new Array(); //Arreglo de botones
var contFi1 = 0; //contador de fichas restantes jugador 1
var contFi2 = 0; //contador de fichas restantes jugador 2

alert("Bienvenidos al TATETI");

window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click", comenzar);
}

function comenzar() {
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    contFi1 = 3;
    contFi2 = 3;
    if(jugador1.value == "") {
        alert("Falta el nombre del jugador 1");
        jugador1.focus();
    } else {
        if(jugador2.value == "") {
            alert("Falta el nombre del jugador 2");
            jugador2.focus();
        } else {
            tab[0] = document.getElementById("b0");
            tab[1] = document.getElementById("b1");
            tab[2] = document.getElementById("b2");
            tab[3] = document.getElementById("b3");
            tab[4] = document.getElementById("b4");
            tab[5] = document.getElementById("b5");
            tab[6] = document.getElementById("b6");
            tab[7] = document.getElementById("b7");
            tab[8] = document.getElementById("b8");
            for( var i = 0; i < 9; i++) {
                tab[i].className = "botonInicial";
                tab[i].value = "I";
            }
            document.getElementById("fichas1").innerHTML = jugador1.value + " Tienes: " + contFi1 + " Fichas ";
            document.getElementById("fichas2").innerHTML = jugador2.value + " Tienes: " + contFi2 + " Fichas ";
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " + jugador1.value;
        }
    }
}

function colocar(boton){
    if(bandera == true) {
        if(turno == 1 && boton.value == "I") {
            fichas();
            turno = 2;
            document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " + jugador2.value;
            boton.value = "X";
            boton.className = "botonJugador1";
        } else {
            if(turno == 2 && boton.value == "I") {
                fichas();
                turno = 1;
                document.getElementById("turnoJugador").innerHTML = "Adelante Jugador " + jugador1.value;
                boton.value = "0";
                boton.className = "botonJugador2";
            }
        }
    }
    revisar();
}

function revisar(){
    if((tab[0].value == "X" && tab[1].value == "X" && tab[2].value=="X")
      || (tab[3].value == "X" && tab[4].value == "X" && tab[5].value=="X")
      || (tab[6].value == "X" && tab[7].value == "X" && tab[8].value=="X")
      || (tab[0].value == "X" && tab[3].value == "X" && tab[6].value=="X")
      || (tab[1].value == "X" && tab[4].value == "X" && tab[7].value=="X")
      || (tab[2].value == "X" && tab[5].value == "X" && tab[8].value=="X")
      || (tab[0].value == "X" && tab[4].value == "X" && tab[8].value=="X")
      || (tab[2].value == "X" && tab[4].value == "X" && tab[6].value=="X")
    ){
        document.getElementById("turnoJugador").innerHTML = "Felicidades ganaste jugador: " + jugador1.value + " toque comenzar ";
        alert("Felicidades ganaste Jugador " + jugador1.value + " toque comenzar ");
        bandera = false;
    }else if((tab[0].value == "0" && tab[1].value == "0" && tab[2].value=="0")
      || (tab[3].value == "0" && tab[4].value == "0" && tab[5].value=="0")
      || (tab[6].value == "0" && tab[7].value == "0" && tab[8].value=="0")
      || (tab[0].value == "0" && tab[3].value == "0" && tab[6].value=="0")
      || (tab[1].value == "0" && tab[4].value == "0" && tab[7].value=="0")
      || (tab[2].value == "0" && tab[5].value == "0" && tab[8].value=="0")
      || (tab[0].value == "0" && tab[4].value == "0" && tab[8].value=="0")
      || (tab[2].value == "0" && tab[4].value == "0" && tab[6].value=="0")
    ){
        document.getElementById("turnoJugador").innerHTML = "Felicidades ganaste jugador: " + jugador2.value + " toque comenzar ";
        alert("Felicidades ganaste Jugador " + jugador2.value + " toque comenzar ");
        bandera = false;
    } else if (contFi1 == 0 && contFi2 == 0) {
        document.getElementById("turnoJugador").innerHTML = "EMPATE, toque comenzar ";
        alert("EMPATE");
        bandera = false;
    }
}

function fichas() {
    if(turno == 1) {
        contFi1--;
        document.getElementById("fichas1").innerHTML = jugador1.value + " Tienes: " + contFi1 + " Fichas ";
    }else {
        contFi2--;
        document.getElementById("fichas2").innerHTML = jugador2.value + " Tienes: " + contFi2 + " Fichas ";
    }
}