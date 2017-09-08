
$(document).ready(function() {
	
	
	
	$("#boton1").click(jugadores);
    
});

function jugadores() {
		
	var numeroJugadores = document.getElementById("jugadores").value;
	
	sessionStorage.setItem("Jugadores", numeroJugadores);
	
	var final = false;
	
	jugadorActual = 1;
	
	do {
		
		switch (jugadorActual) {
		
			case 1:
			
				nombre = prompt("Introduzca el nombre del primer jugador: ");
				sessionStorage.setItem("Jugador1", nombre);
				sessionStorage.setItem("Jugador1_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 2:
			
				nombre = prompt("Introduzca el nombre del segundo jugador: ");
				sessionStorage.setItem("Jugador2", nombre);
				sessionStorage.setItem("Jugador2_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 3:
			
				nombre = prompt("Introduzca el nombre del tercer jugador: ");
				sessionStorage.setItem("Jugador3", nombre);
				sessionStorage.setItem("Jugador3_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 4:
			
				nombre = prompt("Introduzca el nombre del cuarto jugador: ");
				sessionStorage.setItem("Jugador4", nombre);
				sessionStorage.setItem("Jugador4_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 5:
			
				nombre = prompt("Introduzca el nombre del quinto jugador: ");
				sessionStorage.setItem("Jugador5", nombre);
				sessionStorage.setItem("Jugador5_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 6:
			
				nombre = prompt("Introduzca el nombre del sexto jugador: ");
				sessionStorage.setItem("Jugador6", nombre);
				sessionStorage.setItem("Jugador6_puntos","0");
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
		}
		
	} while (final == false);
	
	var juego = $("#tipodejuego").val();
	sessionStorage.setItem("juego", juego);
	
	var url = juego + ".html";
	abrirEnPestana(url);
	
	/*if (juego=="cricket") {
		
		abrirCricket();
		
	}*/
	
}


/*--------------------------------------------------------*/





/*------------------------------------------------------*/
function abrirEnPestana(url) {
		var a = document.createElement("a");
		a.target = "_blank";
		a.href = url;
		a.click();
	}

/*function abrirVentana(url) {
	
	
    window.open(url, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no");
}
*/
