/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.random();
	eleccionMaquina*=3;
	eleccionMaquina=Math.ceil(eleccionMaquina);
	alert(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina){
		case 1:
			alert("Empate");
			break;
		case 2:
			alert("Perdiste");
			break;
		case 3:
			alert("Ganaste");
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina){
		case 1:
			alert("Ganaste");
			break;
		case 2:
			alert("Empate");
			break;
		case 3:
			alert("Perdiste");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
		case 1:
			alert("Perdiste");
			break;
		case 2:
			alert("Ganaste");
			break;
		case 3:
			alert("Empate");
	}
}//FIN DE LA FUNCIÓN