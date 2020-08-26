/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var resultado;
setInterval(Responder,4000);
function comenzar()
{
	var aleatorio1;
	var aleatorio2;
	var operador;

	aleatorio1=Math.random();
	aleatorio1*=10;
	aleatorio1=Math.ceil(aleatorio1);
	document.getElementById('PrimerNumero').value=aleatorio1;
	aleatorio2=Math.random();
	aleatorio2*=10;
	aleatorio2=Math.ceil(aleatorio2);
	document.getElementById('SegundoNumero').value=aleatorio2;
	operador=Math.random();
	operador*=4;
	operador=Math.ceil(operador);

	switch (operador){
		case 1:
		document.getElementById('Operador').value="Suma";
		resultado=aleatorio1+aleatorio2;
		break;
		case 2:
		document.getElementById('Operador').value="Resta";
		resultado=aleatorio1-aleatorio2;
		break;
		case 3:
		document.getElementById('Operador').value="Multiplicación";
		resultado=aleatorio1*aleatorio2;
		break;
		case 4:
		document.getElementById('Operador').value="Division";
		resultado=aleatorio1/aleatorio2;
		break;
	}
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	respuesta=parseInt(respuesta);
	if (respuesta==resultado){
		alert("Respuesta correcta!!.Felicitaciones!!");
	}else{
		alert("Respuesta incorrecta ;( . Intentelo nuevamente. La respuesta correcta era "+resultado);
	}
	comenzar();

}//FIN DE LA FUNCIÓN
