/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resultado=numerouno + numerodos;
	alert("el resultado de la suma de los numeros es : "+resultado);
}

function restar()
{
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resultado=numerouno - numerodos;
	alert("el resultado de la resta de los numeros es : "+resultado);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resultado=numerouno * numerodos;
	alert("el resultado de la multiplicacion de los numeros es : "+resultado);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);
	resultado=numerouno / numerodos;
	alert("el resultado de la division de los numeros es : "+resultado);
}

