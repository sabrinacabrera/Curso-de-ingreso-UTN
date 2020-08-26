/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var cuenta;

function comenzar()
{	
	numeroSecreto=Math.random();
	numeroSecreto*=100;
	numeroSecreto=Math.round(numeroSecreto);
	numeroSecreto++;	
	alert(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;

	if (contadorIntentos==cuenta){
		contadorIntentos=0;
	}
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	if (numeroIngresado<1||numeroIngresado>100){
		alert("Debe ingresar un numero entre 1 y 100. Intente nuevamente");
	}else if(numeroIngresado==numeroSecreto){
		switch(contadorIntentos){
			case 1: 
				alert("Usted es un Psíquico!!!");
				break;
			case 2: 
				alert("Exelente percepción");
				break;
			case 3: 
				alert("Esto es suerte");
				break;
			case 4: 
				alert("Exelente tecnica");
				break;
			case 5: 
				alert("Usted esta en la media");
				break;
			case 6: 
				alert("Falta tecnica");
				break;
			case 6: 
				alert("Falta tecnica");
				break;
			case 7: 
				alert("Falta tecnica");
				break;
			case 8: 
				alert("Falta tecnica");
				break;
			case 9: 
				alert("Falta tecnica");
				break;
			case 10: 
				alert("Falta tecnica");
				break;
			default: 
				alert("Afortunado en el amor");
		}
	}else if (numeroIngresado<numeroSecreto){
		alert("El numero ingresado es menor al numero a adivinar");
	}else if (numeroIngresado>numeroSecreto){
		alert("El numero ingresado es mayor al numero a adivinar");
	}

}