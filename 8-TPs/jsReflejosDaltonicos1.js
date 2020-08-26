/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;

setInterval(tiempo,1000);
function tiempo()
{
	tiempoInicio++;
}
function comenzar()
{
	tiempoInicio=0;
	ColorSecreto=Math.random();
	ColorSecreto*=6;
	ColorSecreto=Math.ceil(ColorSecreto);
	switch (ColorSecreto){
		case 1:
			ColorSecreto="azul";
			break;
		case 2:
			ColorSecreto="amarillo";
			break;
		case 3:
			ColorSecreto="marron";
			break;
		case 4:
			ColorSecreto="verde";
			break;
		case 5:
			ColorSecreto="celeste";
			break;
		case 6:
			ColorSecreto="rojo";
	}
	document.getElementById('ColorElejido').value=ColorSecreto;
	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	if (colorParametro==ColorSecreto){
		alert("Correcto!!!.Tu tiempo de respuesta fue de :"+tiempoInicio+" segundos");
	}else{
		alert("Incorrecto. Vuelva a intentarlo");
	}
	comenzar();
}//FIN DE LA FUNCIÓN
