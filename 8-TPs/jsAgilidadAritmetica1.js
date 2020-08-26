/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var resultado;
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
