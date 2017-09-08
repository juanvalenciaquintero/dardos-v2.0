// JavaScript Document
/*window.addEventListener("load", comenzar, false);*/
$(document).ready(function() {
	
	
	$("#ventanaEmergente").hide();
	
	var juego = sessionStorage.getItem("juego");
	
			
	$("#principal").html('<div id="titulo">Jugadores</div>');
	
	imprimirJugadores();
	
	jugAct = 1;
	
	
    
});


function imprimirJugadores(){
	
	var numeroJugadores = sessionStorage.getItem("Jugadores");
		
	jugadorActual=1;
		
	var final = false;
	
	do {
		
		switch (jugadorActual) {
		
			case 1:
				
				$("#principal").append('<table id="tabla1"><tr><td colspan="3" class="jugador" id="jugador1"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar1" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros1"><td id="15_1_1"></td><td id="15_2_1"></td><td id="15_3_1"></td><td id="16_1_1"></td><td id="16_2_1"></td><td id="16_3_1"></td><td id="17_1_1"></td><td id="17_2_1"></td><td id="17_3_1"></td><td id="18_1_1"></td><td id="18_2_1"></td><td id="18_3_1"></td><td id="19_1_1"></td><td id="19_2_1"></td><td id="19_3_1"></td><td id="20_1_1"></td><td id="20_2_1"></td><td id="20_3_1"></td><td id="di_1_1"></td><td id="di_2_1"></td><td id="di_3_1"></td></tr></table>');
				
				$("#jugador1").html(sessionStorage.getItem("Jugador1"));	
				
				var cuadros_jugador;
				
				
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador = "Jugador1_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}
				
				sessionStorage.setItem("Jugador1_dianas", "0");
				sessionStorage.setItem("Jugador1_terminado", "no");
								
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 2:
			
				$("#principal").append('<table id="tabla2"><tr><td colspan="3" class="jugador" id="jugador2"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar2" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros2"><td id="15_1_2"></td><td id="15_2_2"></td><td id="15_3_2"></td><td id="16_1_2"></td><td id="16_2_2"></td><td id="16_3_2"></td><td id="17_1_2"></td><td id="17_2_2"></td><td id="17_3_2"></td><td id="18_1_2"></td><td id="18_2_2"></td><td id="18_3_2"></td><td id="19_1_2"></td><td id="19_2_2"></td><td id="19_3_2"></td><td id="20_1_2"></td><td id="20_2_2"></td><td id="20_3_2"></td><td id="di_1_2"></td><td id="di_2_2"></td><td id="di_3_2"></td></tr></table>');
				
				$("#jugador2").html(sessionStorage.getItem("Jugador2"));	
				
				var cuadros_jugador;
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador = "Jugador2_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}			
				
				sessionStorage.setItem("Jugador2_dianas", "0");
				sessionStorage.setItem("Jugador2_terminado", "no");
				
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 3:
			
			$("#principal").append('<table id="tabla3"><tr><td colspan="3" class="jugador" id="jugador3"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar3" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros3"><td id="15_1_3"></td><td id="15_2_3"></td><td id="15_3_3"></td><td id="16_1_3"></td><td id="16_2_3"></td><td id="16_3_3"></td><td id="17_1_3"></td><td id="17_2_3"></td><td id="17_3_3"></td><td id="18_1_3"></td><td id="18_2_3"></td><td id="18_3_3"></td><td id="19_1_3"></td><td id="19_2_3"></td><td id="19_3_3"></td><td id="20_1_3"></td><td id="20_2_3"></td><td id="20_3_3"></td><td id="di_1_3"></td><td id="di_2_3"></td><td id="di_3_3"></td></tr></table>');
				
				$("#jugador3").html(sessionStorage.getItem("Jugador3"));	
				
				var cuadros_jugador;
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador ="Jugador3_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}
				
				sessionStorage.setItem("Jugador3_dianas", "0");
				sessionStorage.setItem("Jugador3_terminado", "no");
				
				
								
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 4:
			
			$("#principal").append('<table id="tabla4"><tr><td colspan="3" class="jugador" id="jugador4"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar4" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros4"><td id="15_1_4"></td><td id="15_2_4"></td><td id="15_3_4"></td><td id="16_1_4"></td><td id="16_2_4"></td><td id="16_3_4"></td><td id="17_1_4"></td><td id="17_2_4"></td><td id="17_3_4"></td><td id="18_1_4"></td><td id="18_2_4"></td><td id="18_3_4"></td><td id="19_1_4"></td><td id="19_2_4"></td><td id="19_3_4"></td><td id="20_1_4"></td><td id="20_2_4"></td><td id="20_3_4"></td><td id="di_1_4"></td><td id="di_2_4"></td><td id="di_3_4"></td></tr></table>');
				
				$("#jugador4").html(sessionStorage.getItem("Jugador4"));	
				
				var cuadros_jugador;
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador = "Jugador4_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}
				
				sessionStorage.setItem("Jugador4_dianas", "0");
				sessionStorage.setItem("Jugador4_terminado", "no");
				
				
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 5:
						
			$("#principal").append('<table id="tabla5"><tr><td colspan="3" class="jugador" id="jugador5"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar5" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros5"><td id="15_1_5"></td><td id="15_2_5"></td><td id="15_3_5"></td><td id="16_1_5"></td><td id="16_2_5"></td><td id="16_3_5"></td><td id="17_1_5"></td><td id="17_2_5"></td><td id="17_3_5"></td><td id="18_1_5"></td><td id="18_2_5"></td><td id="18_3_5"></td><td id="19_1_5"></td><td id="19_2_5"></td><td id="19_3_5"></td><td id="20_1_5"></td><td id="20_2_5"></td><td id="20_3_5"></td><td id="di_1_5"></td><td id="di_2_5"></td><td id="di_3_5"></td></tr></table>');
				
				$("#jugador5").html(sessionStorage.getItem("Jugador5"));
				
				var cuadros_jugador;
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador = "Jugador5_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}	
				
				sessionStorage.setItem("Jugador5_dianas", "0");
				sessionStorage.setItem("Jugador5_terminado", "no");
			
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 6:
						
			$("#principal").append('<table id="tabla6"><tr><td colspan="3" class="jugador" id="jugador6"></td><td  class="b_aceptar"><input type="button" class="puntuar" id="puntuar6" value="Puntuar"></td><td id="puntos">Puntos:</td></tr></table><table id="tablapuntos"><tr id="numeros"><td colspan="3">15</td><td colspan="3">16</td><td colspan="3">17</td><td colspan="3">18</td><td colspan="3">19</td><td colspan="3">20</td><td colspan="3">Diana</td></tr><tr id="cuadros6"><td id="15_1_6"></td><td id="15_2_6"></td><td id="15_3_6"></td><td id="16_1_6"></td><td id="16_2_6"></td><td id="16_3_6"></td><td id="17_1_6"></td><td id="17_2_6"></td><td id="17_3_6"></td><td id="18_1_6"></td><td id="18_2_6"></td><td id="18_3_6"></td><td id="19_1_6"></td><td id="19_2_6"></td><td id="19_3_6"></td><td id="20_1_6"></td><td id="20_2_6"></td><td id="20_3_6"></td><td id="di_1_6"></td><td id="di_2_6"></td><td id="di_3_6"></td></tr></table>');
				
				$("#jugador6").html(sessionStorage.getItem("Jugador6"));
				
				var cuadros_jugador;
				
				for (i=15;i<=20	;i++){
					
					cuadros_jugador = "Jugador6_" + i;
					
					sessionStorage.setItem(cuadros_jugador, "0");
					
				}
				
				sessionStorage.setItem("Jugador6_dianas", "0");
				sessionStorage.setItem("Jugador6_terminado", "no");
				
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
		}
		
	} while (final == false);
	
	
	
	var boton;
	
	for (i=1;i<=numeroJugadores;i++){
		
		boton = "#puntuar" + i;
		
		$(boton).hide();
		
	}
	
	$("#puntuar1").show();
	
	jugadorActual=1;
	
	sessionStorage.setItem("JugadorActual",jugadorActual);
	
	sessionStorage.setItem("Numero_15_cerrado","no");
	
	sessionStorage.setItem("Numero_16_cerrado","no");
	
	sessionStorage.setItem("Numero_17_cerrado","no");
	
	sessionStorage.setItem("Numero_18_cerrado","no");
	
	sessionStorage.setItem("Numero_19_cerrado","no");
	
	sessionStorage.setItem("Numero_20_cerrado","no");
	
	sessionStorage.setItem("Numero_Dinana_cerrado","no");
	
	
	
	
	
	
	$(".puntuar").click(abrirCricket);
	
}


/*-----------------------------------------------------------------*/


function abrirCricket() {
	
	$("#ventanaEmergente").fadeIn(500);
	
	$("#ventanaEmergente").html('<div id="cabecera2">CRICKET</div>');
	
	$("#ventanaEmergente").append('<div id="primercuadro"><div id="primerdardo">Primer dardo</div><ul class="numeros"><li class="linea"><div class="cuadroa_on_1 primero" id="a_15_1">15</div><div class="cuadrob_on_1 segundo" id="b_15_1">15 Db</div><div class="cuadroc_on_1 tercero" id="c_15_1">15 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_16_1">16</div><div class="cuadrob_on_1 segundo" id="b_16_1">16 Db</div><div class="cuadroc_on_1 tercero" id="c_16_1">16 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_17_1">17</div><div class="cuadrob_on_1 segundo" id="b_17_1">17 Db</div><div class="cuadroc_on_1 tercero" id="c_17_1">17 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_18_1">18</div><div class="cuadrob_on_1 segundo" id="b_18_1">18 Db</div><div class="cuadroc_on_1 tercero" id="c_18_1">18 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_19_1">19</div><div class="cuadrob_on_1 segundo" id="b_19_1">19 Db</div><div class="cuadroc_on_1 tercero" id="c_19_1">19 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_20_1">20</div><div class="cuadrob_on_1 segundo" id="b_20_1">20 Db</div><div class="cuadroc_on_1 tercero" id="c_20_1">20 Tr</div></li><li class="linea"><div class="cuadroa_on_1 primero" id="a_25_1">25</div><div class="cuadrob_on_1 segundo" id="a_50_1">50</div><div class="cuadroc_on_1 tercero" id="c_00_1">0</div></li></ul></div><div id="segundocuadro"><div id="segundodardo">Segundo dardo</div><ul class="numeros"><li class="linea"><div class="cuadroa_on_2 primero" id="a_15_2">15</div><div class="cuadrob_on_2 segundo" id="b_15_2">15 Db</div><div class="cuadroc_on_2 tercero" id="c_15_2">15 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_16_2">16</div><div class="cuadrob_on_2 segundo" id="b_16_2">16 Db</div><div class="cuadroc_on_2 tercero" id="c_16_2">16 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_17_2">17</div><div class="cuadrob_on_2 segundo" id="b_17_2">17 Db</div><div class="cuadroc_on_2 tercero" id="c_17_2">17 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_18_2">18</div><div class="cuadrob_on_2 segundo" id="b_18_2">18 Db</div><div class="cuadroc_on_2 tercero" id="c_18_2">18 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_19_2">19</div><div class="cuadrob_on_2 segundo" id="b_19_2">19 Db</div><div class="cuadroc_on_2 tercero" id="c_19_2">19 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_20_2">20</div><div class="cuadrob_on_2 segundo" id="b_20_2">20 Db</div><div class="cuadroc_on_2 tercero" id="c_20_2">20 Tr</div></li><li class="linea"><div class="cuadroa_on_2 primero" id="a_25_2">25</div><div class="cuadrob_on_2 segundo" id="a_50_2">50</div><div class="cuadroc_on_2 tercero" id="c_00_2">0</div></li></ul></div><div id="tercercuadro"><div id="tercerdardo">Tercer dardo</div><ul class="numeros"><li class="linea"><div class="cuadroa_on_3 primero" id="a_15_3">15</div><div class="cuadrob_on_3 segundo" id="b_15_3">15 Db</div><div class="cuadroc_on_3 tercero" id="c_15_3">15 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_16_3">16</div><div class="cuadrob_on_3 segundo" id="b_16_3">16 Db</div><div class="cuadroc_on_3 tercero" id="c_16_3">16 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_17_3">17</div><div class="cuadrob_on_3 segundo" id="b_17_3">17 Db</div><div class="cuadroc_on_3 tercero" id="c_17_3">17 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_18_3">18</div><div class="cuadrob_on_3 segundo" id="b_18_3">18 Db</div><div class="cuadroc_on_3 tercero" id="c_18_3">18 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_19_3">19</div><div class="cuadrob_on_3 segundo" id="b_19_3">19 Db</div><div class="cuadroc_on_3 tercero" id="c_19_3">19 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_20_3">20</div><div class="cuadrob_on_3 segundo" id="b_20_3">20 Db</div><div class="cuadroc_on_3 tercero" id="c_20_3">20 Tr</div></li><li class="linea"><div class="cuadroa_on_3 primero" id="a_25_3">25</div><div class="cuadrob_on_3 segundo" id="a_50_3">50</div><div class="cuadroc_on_3 tercero" id="c_00_3">0</div></li></ul></div><div id="puntostotales">Puntos: </div><div id="b_aceptar1"><input type="button" id="b_aceptar2" value="Aceptar"></div>');
	
	var numeroJugadores = sessionStorage.getItem("Jugadores");
	
	var jugadorActual= sessionStorage.getItem("JugadorActual");
	
	$("#b_aceptar2").click(function(){
		
		var tar, puntos, cerrado, puntos_cerrado, suma_puntos, puntos_totales, tabla;
		
		suma_puntos = parseInt(sessionStorage.getItem("Jugador" + jugadorActual + "_puntos"));
			
		for (x=1;x<=3;x++){
			
		
				if (x==1){
				
					tar = sessionStorage.getItem('PrimerDardo');
					
					puntos = parseInt(tar.substring(3,5));
					
					if (puntos == 25 || puntos == 50) {
						
						puntos_cerrado = "Jugador" + jugadorActual + "_dianas_cerrado";

					} else {
					
						puntos_cerrado = "Jugador" + jugadorActual + "_" + puntos + "_cerrado";
					
					}
					
					var p = tar.substring(3,5);
						
					if (p=="25" || p=="50") {
							
							p="Diana";
							
					}
					
					if (sessionStorage.getItem(puntos_cerrado)=='si' && sessionStorage.getItem("Numero_" + p + "_cerrado")!="si") {
						
						if (tar.charAt(1)=="a"){
							
							suma_puntos = suma_puntos + parseInt(puntos);
								
						} else if (tar.charAt(1)=="b"){
							
							if (puntos==50) {
								
								suma_puntos = suma_puntos + 50;
								
							} else {
							
								suma_puntos = suma_puntos + (parseInt(puntos)*2);
								
							}
								
						} else if (tar.charAt(1)=="c"){
														
								suma_puntos = suma_puntos + (parseInt(puntos)*3);
														
						}
						
					}
				
				} else if (x==2){
				
					tar = sessionStorage.getItem('SegundoDardo');
					
					puntos = parseInt(tar.substring(3,5));
					
					if (puntos == 25 || puntos == 50) {
						
						puntos_cerrado = "Jugador" + jugadorActual + "_dianas_cerrado";

					} else {
					
						puntos_cerrado = "Jugador" + jugadorActual + "_" + puntos + "_cerrado";
					
					}
					
					var p = tar.substring(3,5);
						
					if (p=="25" || p=="50") {
							
							p="Diana";
							
					}
					
					if (sessionStorage.getItem(puntos_cerrado)=='si' && sessionStorage.getItem("Numero_" + p + "_cerrado")!="si") {
						
						if (tar.charAt(1)=="a"){
							
							suma_puntos = suma_puntos + parseInt(puntos);
								
						} else if (tar.charAt(1)=="b"){
							
							if (puntos==50) {
								
								suma_puntos = suma_puntos + 50;
								
							} else {
							
								suma_puntos = suma_puntos + (parseInt(puntos)*2);
								
							}
								
						} else if (tar.charAt(1)=="c"){
														
								suma_puntos = suma_puntos + (parseInt(puntos)*3);
														
						}
						
					}
				
				} else if (x==3){
				
					tar = sessionStorage.getItem('TercerDardo');
					
					puntos = parseInt(tar.substring(3,5));
					
					if (puntos == 25 || puntos == 50) {
						
						puntos_cerrado = "Jugador" + jugadorActual + "_dianas_cerrado";

					} else {
					
						puntos_cerrado = "Jugador" + jugadorActual + "_" + puntos + "_cerrado";
					
					}
					
					var p = tar.substring(3,5);
						
					if (p=="25" || p=="50") {
							
							p="Diana";
							
					}
					
					if (sessionStorage.getItem(puntos_cerrado)=='si' && sessionStorage.getItem("Numero_" + p + "_cerrado")!="si" ) {			// Se el jugador ha cerrado un número pero este número no esta cerrado por los demas jugadores
						
																													
								if (tar.charAt(1)=="a"){
							
									suma_puntos = suma_puntos + parseInt(puntos);
								
								} else if (tar.charAt(1)=="b"){
							
										if (puntos==50) {
								
												suma_puntos = suma_puntos + 50;
								
										} else {
							
											suma_puntos = suma_puntos + (parseInt(puntos)*2);
								
										}
								
								} else if (tar.charAt(1)=="c"){
														
									suma_puntos = suma_puntos + (parseInt(puntos)*3);
														
								}												
						
					}
				
				} // Fin primer if
					
				var numero_pulsado = tar.substring(3,5);
	
				if (numero_pulsado == "25" || numero_pulsado == "50") {
		
					numero_pulsado = "dianas";			
		
				}  // fin segundo if
	
				var pulsaciones_grabadas = "Jugador" + jugadorActual + "_" + numero_pulsado;
	
				var numero_pulsaciones_grabadas = sessionStorage.getItem(pulsaciones_grabadas);
	
				if (tar.charAt(1) == "a") {
		
					var n_p_g	 = parseInt(numero_pulsaciones_grabadas)+1;
				
				} else if (tar.charAt(1) == "b"){
		
					var n_p_g	 = parseInt(numero_pulsaciones_grabadas)+2;
				
				} else if (tar.charAt(1) == "c"){
		
					var n_p_g	 = parseInt(numero_pulsaciones_grabadas)+3;
				
				}   // Fin if (tar.charAt(1) == "a")
		
				if (n_p_g == 4 || n_p_g == 3) {
			
					n_p_g = 3;	
					
					cerrado = "Jugador" + jugadorActual + "_" + numero_pulsado + "_cerrado";
				
					sessionStorage.setItem(cerrado, "si");
					
					var numero_cerrado=0;
					
					for (m=1;m<=numeroJugadores;m++){
						
						cerrado = "Jugador" + m + "_" + numero_pulsado + "_cerrado";
						
						if (sessionStorage.getItem(cerrado)=="si"){
							
							numero_cerrado +=1;
							
						}
						
						
					}
					
					if (numero_cerrado == numeroJugadores) {
						
						cerrado = "Numero_" + numero_pulsado + "_cerrado";
						
						sessionStorage.setItem(cerrado, "si");
						
					}
						 
				}  
				
				sessionStorage.setItem(pulsaciones_grabadas, n_p_g);
				
		} // Fin for
				
		sessionStorage.setItem("Jugador" + jugadorActual + "_puntos", suma_puntos);
		
		tabla = "#tabla" +  jugadorActual + " #puntos";
		
		$(tabla).html("Puntos: " + suma_puntos);
			
		
		/*-------------------------------------------------------------*/	
			
		
		
		var pulsado = "Jugador" + jugadorActual + "_" ;
		
		var puls;
		
		var tabla = "#tabla" + jugadorActual;
		
		var selector = '#cuadros' + jugadorActual + " ";
		
		for (i=15;i<=20;i++){
			
			pulsad = pulsado + i;
			
			numero_pulsaciones = parseInt(sessionStorage.getItem(pulsad));
			
			if (numero_pulsaciones > 0) {
												
				
			
				for (x=1;x<=numero_pulsaciones;x++){
					
					puls= selector + "#" + i + "_" + x + "_" + jugadorActual;
				
					$(puls).css('background-color','#FC0206');
					
				}
				
			}
			
		}
		
		pulsad = pulsado + "dianas";
		
		numero_pulsaciones = parseInt(sessionStorage.getItem(pulsad));
		
		if (numero_pulsaciones > 0) {
																			
				for (x=1;x<=numero_pulsaciones;x++){
					
					puls= selector + "#di_" + x + "_" + jugadorActual;
				
					$(puls).css('background-color','#FC0206');
					
				}
				
			}
		
		var terminado=0;
		
		for (x=15;x<=21;x++) {		// Comprobar si el jugador ha cerrado todos sus numeros
			
			var y;
			
			if (x == 21) {
				
				y = "dianas";
				
			} else {
				
				y = x;
					
			}
			
			if (sessionStorage.getItem("Jugador" + jugadorActual + "_" + y + "_cerrado") == "si") {
				
				terminado += 1;	
				
			} 
			
		}
		
		if (terminado == 7) {
			
			sessionStorage.setItem("Jugador" + jugadorActual + "_terminado","si");	
						
			
		}
		
		var ganador = false;
		
		y=1;
		
		while (ganador == false && y <= numeroJugadores) {
			
			if (sessionStorage.getItem("Jugador" + y + "_terminado")=="si") {
				
				if (y==numeroJugadores){
					
					ganador=true;
					
					var puntos_jugador = parseInt(sessionStorage.getItem("Jugador" + jugadorActual + "_puntos"));
					
					var puntos_otros=0, ganador_puntos = true, z=1;
					
					while (ganador_puntos==true && puntos_otros < puntos_jugador && z<=numeroJugadores) {
						
						if (z != jugadorActual) {
						
							puntos_otros = sessionStorage.getItem("Jugador" + z + "_puntos");
							
							if (puntos_otros < puntos_jugador) {
								
								z++;								

							} else {
								
								ganador_puntos = false;	
								
							}
						
						} else {
							
							z++;
								
						}
						
						if (ganador_puntos) {
							
							alert("Ha ganado el jugador " + jugadorActual);	
							
						}
					}
						
				} else {
					
					y++;	
					
				}
								
			} else {
				
				y++;
					
			}
								
			
		}
		
		
		$("#ventanaEmergente").fadeOut(300);
		
		var boton;
		
		if (jugadorActual < numeroJugadores) {
			
			jugadorActual++;
	
			
		}  else {
			
			jugadorActual=1;			
			
		}
						
		sessionStorage.setItem("JugadorActual",jugadorActual);
	
		for (i=1;i<=numeroJugadores;i++){
		
			boton = "#puntuar" + i;
		
			$(boton).hide();
		
		}
		
		boton = "#puntuar" + jugadorActual;
		
		$(boton).show();
		
		
		
		
		
		//$("#botones_pulsados").html(atributo);
		
		
	});
	
		
	$(".cuadroa_on_1").click(cambiarEstado);
	$(".cuadrob_on_1").click(cambiarEstado);
	$(".cuadroc_on_1").click(cambiarEstado);
	$(".cuadroa_off_1").click(cambiarEstado);
	$(".cuadrob_off_1").click(cambiarEstado);
	$(".cuadroc_off_1").click(cambiarEstado);
	
	$(".cuadroa_on_2").click(cambiarEstado);
	$(".cuadrob_on_2").click(cambiarEstado);
	$(".cuadroc_on_2").click(cambiarEstado);
	$(".cuadroa_off_2").click(cambiarEstado);
	$(".cuadrob_off_2").click(cambiarEstado);
	$(".cuadroc_off_2").click(cambiarEstado);
	
	$(".cuadroa_on_3").click(cambiarEstado);
	$(".cuadrob_on_3").click(cambiarEstado);
	$(".cuadroc_on_3").click(cambiarEstado);
	$(".cuadroa_off_3").click(cambiarEstado);
	$(".cuadrob_off_3").click(cambiarEstado);
	$(".cuadroc_off_3").click(cambiarEstado);
	
}

/*------------------------------------------------------*/

function cambiarEstado(e){
	
	var jugador_actual = sessionStorage.getItem("JugadorActual");
	
	var numeroJugadores = sessionStorage.getItem("Jugadores");	
	
	var pulsado = 0;
	
	var puntos;
			
	var tar = "#" + e.target.getAttribute('id');
	
	var numero_dardo = tar.charAt(6);
	
	if (numero_dardo=='1') {
	
		sessionStorage.setItem('PrimerDardo', tar);
		
	} else if (numero_dardo=='2') {
	
		sessionStorage.setItem('SegundoDardo', tar);
		
	} else if (numero_dardo=='3') {
	
		sessionStorage.setItem('TercerDardo', tar);
	} 
	
	
	
	
	var clase = e.target.getAttribute('class');
	
	if (clase == "cuadroa_on_1 primero" ) {
		
		$(".cuadroa_off_1").removeClass('cuadroa_off_1 primero').addClass('cuadroa_on_1 primero');
		$(".cuadrob_off_1").removeClass('cuadrob_off_1 segundo').addClass('cuadrob_on_1 segundo');
		$(".cuadroc_off_1").removeClass('cuadroc_off_1 tercero').addClass('cuadroc_on_1 tercero');
									
		$(tar).removeClass('cuadroa_on_1 primero').addClass('cuadroa_off_1 primero');
		
		
		
		puntos = parseInt(tar.substring(3,5));
		
		
		pulsado=1;
			
	} else if (clase == "cuadrob_on_1 segundo") {
		
		$(".cuadroa_off_1").removeClass('cuadroa_off_1 primero').addClass('cuadroa_on_1 primero');
		$(".cuadrob_off_1").removeClass('cuadrob_off_1 segundo').addClass('cuadrob_on_1 segundo');
		$(".cuadroc_off_1").removeClass('cuadroc_off_1 tercero').addClass('cuadroc_on_1 tercero');
		
			
			$(tar).removeClass('cuadrob_on_1 segundo').addClass('cuadrob_off_1 segundo');
								
			puntos = parseInt(tar.substring(3,5));
			
			if (puntos != 50) {
				
				puntos = puntos*2;	
				
			}
			
			pulsado=1;
			
	} else if (clase == "cuadroc_on_1 tercero") {
		
		$(".cuadroa_off_1").removeClass('cuadroa_off_1 primero').addClass('cuadroa_on_1 primero');
		$(".cuadrob_off_1").removeClass('cuadrob_off_1 segundo').addClass('cuadrob_on_1 segundo');
		$(".cuadroc_off_1").removeClass('cuadroc_off_1 tercero').addClass('cuadroc_on_1 tercero');
			
		$(tar).removeClass('cuadroc_on_1 tercero').addClass('cuadroc_off_1 tercero');
		
		puntos = parseInt(tar.substring(3,5))*3;
			
		pulsado=1;
			
	} else if (clase == "cuadroa_on_2 primero" ) {
		
		$(".cuadroa_off_2").removeClass('cuadroa_off_2 primero').addClass('cuadroa_on_2 primero');
		$(".cuadrob_off_2").removeClass('cuadrob_off_2 segundo').addClass('cuadrob_on_2 segundo');
		$(".cuadroc_off_2").removeClass('cuadroc_off_2 tercero').addClass('cuadroc_on_2 tercero');
									
		$(tar).removeClass('cuadroa_on_2 primero').addClass('cuadroa_off_2 primero');
		
		
		
		puntos = parseInt(tar.substring(3,5));
		
		
		pulsado=1;
			
	} else if (clase == "cuadrob_on_2 segundo") {
		
		$(".cuadroa_off_2").removeClass('cuadroa_off_2 primero').addClass('cuadroa_on_2 primero');
		$(".cuadrob_off_2").removeClass('cuadrob_off_2 segundo').addClass('cuadrob_on_2 segundo');
		$(".cuadroc_off_2").removeClass('cuadroc_off_2 tercero').addClass('cuadroc_on_2 tercero');
		
			
			$(tar).removeClass('cuadrob_on_2 segundo').addClass('cuadrob_off_2 segundo');
								
			puntos = parseInt(tar.substring(3,5));
			
			if (puntos != 50) {
				
				puntos = puntos*2;	
				
			}
			
			pulsado=1;
			
	} else if (clase == "cuadroc_on_2 tercero") {
		
		$(".cuadroa_off_2").removeClass('cuadroa_off_2 primero').addClass('cuadroa_on_2 primero');
		$(".cuadrob_off_2").removeClass('cuadrob_off_2 segundo').addClass('cuadrob_on_2 segundo');
		$(".cuadroc_off_2").removeClass('cuadroc_off_2 tercero').addClass('cuadroc_on_2 tercero');
			
		$(tar).removeClass('cuadroc_on_2 tercero').addClass('cuadroc_off_2 tercero');
		
		puntos = parseInt(tar.substring(3,5))*3;
			
		pulsado=1;
			
	} else if (clase == "cuadroa_on_3 primero" ) {
		
		$(".cuadroa_off_3").removeClass('cuadroa_off_3 primero').addClass('cuadroa_on_3 primero');
		$(".cuadrob_off_3").removeClass('cuadrob_off_3 segundo').addClass('cuadrob_on_3 segundo');
		$(".cuadroc_off_3").removeClass('cuadroc_off_3 tercero').addClass('cuadroc_on_3 tercero');
									
		$(tar).removeClass('cuadroa_on_3 primero').addClass('cuadroa_off_3 primero');
		
		
		
		puntos = parseInt(tar.substring(3,5));
		
		
		pulsado=1;
			
	} else if (clase == "cuadrob_on_3 segundo") {
		
		$(".cuadroa_off_3").removeClass('cuadroa_off_3 primero').addClass('cuadroa_on_3 primero');
		$(".cuadrob_off_3").removeClass('cuadrob_off_3 segundo').addClass('cuadrob_on_3 segundo');
		$(".cuadroc_off_3").removeClass('cuadroc_off_3 tercero').addClass('cuadroc_on_3 tercero');
		
			
			$(tar).removeClass('cuadrob_on_3 segundo').addClass('cuadrob_off_3 segundo');
								
			puntos = parseInt(tar.substring(3,5));
			
			if (puntos != 50) {
				
				puntos = puntos*2;	
				
			}
			
			pulsado=1;
			
	} else if (clase == "cuadroc_on_3 tercero") {
		
		$(".cuadroa_off_3").removeClass('cuadroa_off_3 primero').addClass('cuadroa_on_3 primero');
		$(".cuadrob_off_3").removeClass('cuadrob_off_3 segundo').addClass('cuadrob_on_3 segundo');
		$(".cuadroc_off_3").removeClass('cuadroc_off_3 tercero').addClass('cuadroc_on_3 tercero');
			
		$(tar).removeClass('cuadroc_on_3 tercero').addClass('cuadroc_off_3 tercero');
		
		puntos = parseInt(tar.substring(3,5))*3;
			
		pulsado=1;
			
	} else if (clase == "cuadroa_off_1 primero" ) {
		
									
		$(tar).removeClass('cuadroa_off_1 primero').addClass('cuadroa_on_1 primero');
		
		puntos = 0;
		
		pulsado=0;
			
	} else if (clase == "cuadrob_off_1 segundo") {
		
			
		$(tar).removeClass('cuadrob_off_1 segundo').addClass('cuadrob_on_1 segundo');
		
		puntos = 0;
			
		pulsado=0;
			
	} else if (clase == "cuadroc_off_1 tercero") {
		
	
		$(tar).removeClass('cuadroc_off_1 tercero').addClass('cuadroc_on_1 tercero');
		
		puntos = 0;
			
		pulsado=0;
			
	} else if (clase == "cuadroa_off_2 primero" ) {
		
									
		$(tar).removeClass('cuadroa_off_2 primero').addClass('cuadroa_on_2 primero');
		
		puntos = 0;
		
		pulsado=0;
			
	} else if (clase == "cuadrob_off_2 segundo") {
		
			
		$(tar).removeClass('cuadrob_off_2 segundo').addClass('cuadrob_on_2 segundo');
		
		puntos = 0;
			
		pulsado=0;
			
	} else if (clase == "cuadroc_off_2 tercero") {
		
	
		$(tar).removeClass('cuadroc_off_2 tercero').addClass('cuadroc_on_2 tercero');
		
		puntos = 0;
			
		pulsado=0;
			
	} else if (clase == "cuadroa_off_3 primero" ) {
		
									
		$(tar).removeClass('cuadroa_off_3 primero').addClass('cuadroa_on_3 primero');
		
		puntos = 0;
		
		pulsado=0;
			
	} else if (clase == "cuadrob_off_3 segundo") {
		
			
		$(tar).removeClass('cuadrob_off_3 segundo').addClass('cuadrob_on_3 segundo');
		
		puntos = 0;
			
		pulsado=0;
			
	} else if (clase == "cuadroc_off_3 tercero") {
		
	
		$(tar).removeClass('cuadroc_off_3 tercero').addClass('cuadroc_on_3 tercero');
		
		puntos = 0;
			
		pulsado=0;
			
	}
	
	$("#puntostotales").html("Pulsado: " + puntos);
	
}


/*
function comenzar(){
	var jugador1= document.getElementById("jugador1");
	var puntos1= document.getElementById("puntos1");
	var ultimo1= document.getElementById("ultimo1");
	
	var jugador2= document.getElementById("jugador2");
	var puntos2= document.getElementById("puntos2");
	var ultimo2= document.getElementById("ultimo2");
	
	var jugador3= document.getElementById("jugador3");
	var puntos3= document.getElementById("puntos3");
	var ultimo3= document.getElementById("ultimo3");
	
	var jugador4= document.getElementById("jugador4");
	var puntos4= document.getElementById("puntos4");
	var ultimo4= document.getElementById("ultimo4");
	
	var jugador5= document.getElementById("jugador5");
	var puntos5= document.getElementById("puntos5");
	var ultimo5= document.getElementById("ultimo5");
	
	var jugador6= document.getElementById("jugador6");
	var puntos6= document.getElementById("puntos6");
	var ultimo6= document.getElementById("ultimo6");
	
	
	var juego = sessionStorage.getItem("juego");
	
	var numeroJugadores = sessionStorage.getItem("Jugadores");
	
	var final = false;
	
	jugadorActual=1;
		
	
	do {
		
		switch (jugadorActual) {
		
			case 1:
			
				var jug1 = sessionStorage.getItem("Jugador1");	
				jugador1.innerHTML = jug1;				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 2:
			
				var jug2 = sessionStorage.getItem("Jugador2");	
				var tabla2 = document.getElementById("tabla2");
				tabla2.style.display="block";
				jugador2.innerHTML = jug2;
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 3:
			
				jug3 = sessionStorage.getItem("Jugador3");	
				var tabla3 = document.getElementById("tabla3");
				tabla3.style.display="block";
				jugador3.innerHTML = jug3;
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 4:
			
				jug4 = sessionStorage.getItem("Jugador4");	
				var tabla4 = document.getElementById("tabla4");
				tabla4.style.display="block";
				jugador4.innerHTML = jug4;
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 5:
			
				jug5 = sessionStorage.getItem("Jugador5");
				var tabla5 = document.getElementById("tabla5");
				tabla5.style.display="block";	
				jugador5.innerHTML = jug5;
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
			case 6:
			
				jug6 = sessionStorage.getItem("Jugador6");	
				var tabla6 = document.getElementById("tabla6");
				tabla6.style.display="block";
				jugador6.innerHTML = jug6;
				
				
				if (jugadorActual==numeroJugadores){
					final = true;	
				}
				jugadorActual++;
				break;
				
		}
		
	} while (final == false);
	
	var punt1 = document.getElementById("puntuar1");
	punt1.addEventListener("click", puntuar);
	
	var punt2 = document.getElementById("puntuar2");
	punt2.style.display = "none";
	
	var punt3 = document.getElementById("puntuar3");
	punt3.style.display = "none";
	
	var punt4 = document.getElementById("puntuar4");
	punt4.style.display = "none";
	
	var punt5 = document.getElementById("puntuar5");
	punt5.style.display = "none";
	
	var punt6 = document.getElementById("puntuar6");
	punt6.style.display = "none";
	
	sessionStorage.setItem("JugadorActual", 1);
	
	
	

}*/