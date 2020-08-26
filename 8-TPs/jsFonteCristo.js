/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numeroIngresado;

function ComenzarIngreso () 
{
 	
}
function NumerosPares()
{
	var par;
	var cantidad;

	cantidad=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	par=numeroIngresado%2;

	if (numeroIngresado>0){
		if (par==0){
			for (var i =numeroIngresado; i > 0; i-=2) {
				cantidad++;
			}
		}else{
			numeroIngresado--;
			for (var i =numeroIngresado; i > 0; i-=2) {
				cantidad++;
			}
		}
	}
	alert("La cantidad de numeros pares desde el numero ingresado es: "+cantidad);
}
function NumerosImpares() 
{
	var impar;
	var cantidad;

	cantidad=0;
	numeroIngresado=document.getElementById('numero').value;	
	numeroIngresado=parseInt(numeroIngresado);
	impar=numeroIngresado%2;

	if (numeroIngresado>0){
		if (impar==0){
			numeroIngresado--;
			for (var i =numeroIngresado; i > 0; i-=2) {
				cantidad++;
			}
		}else{
			for (var i =numeroIngresado; i > 0; i-=2) {
				cantidad++;
			}
		}
	}
	alert("La cantidad de numeros impares desde el numero ingresado es: "+cantidad);

}
function NumerosDivisibles()
{
	var divisible;
	var cantidad;

	cantidad=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	for (var i =numeroIngresado ; i >= 0; i--) {
		divisible=numeroIngresado%i;
		if (divisible==0){
			cantidad++;
		}
	}
	alert ("la cantidad de numeros divisibles "+cantidad);
}
function VerificarPrimo()
{
	var divisible;
	var cantidad;

	cantidad=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	for (var i =numeroIngresado ; i >= 0; i--) {
		divisible=numeroIngresado%i;
		if (divisible==0){
			cantidad++;
		}
	}
	if (cantidad==2){
			alert("El numero ingresado es un numero primo ");
	}else
		{
			alert("El numero ingresado no es numero primo");
	}
}
function NumerosPrimos()
{
	var divisible;
	var cantidad;
	var cantidadNumerosPrimos;

	cantidad=0;
	cantidadNumerosPrimos=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	for (numeroIngresado; numeroIngresado>=0;numeroIngresado--){
		cantidad=0;
		for (var i =numeroIngresado; i >=0; i--) {
			divisible=numeroIngresado%i;
			if (divisible==0){
				cantidad++;
			}
		}
			if (cantidad==2){
				cantidadNumerosPrimos++;
			}
	}
	alert("la cantidad de Numeros Primos desde el numero ingresado es: "+cantidadNumerosPrimos);
}