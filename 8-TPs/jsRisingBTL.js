/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var	nacionadidad;

 	edad=0;
 	while (edad<18||edad>90){
 		edad=prompt("Ingrese su edad :,de 18 a 90 años inclusive");
 		edad=parseInt(edad);
 	}
 	document.getElementById('Edad').value=edad+" años";
 	sexo="novalido";
 	while (sexo=="novalido")
 	{
 		sexo=prompt("Ingrese su sexo (F: Femenino , M: Masculino)");
 		switch (sexo){
 			case "F":
 				document.getElementById('Sexo').value="Femenino";
 				sexo="valido";
 				break;
 			case "f":
 				document.getElementById('Sexo').value="Femenino";
 				sexo="valido";
 				break;
 			case "M":
 				document.getElementById('Sexo').value="Masculino";
 				sexo="valido";
 				break;
 			case "m":
 				document.getElementById('Sexo').value="Masculino";
 				sexo="valido";
 				break;
 			default:
 				sexo="novalido";
 		}
 	}
 	estadoCivil="novalido";
 	while (estadoCivil=="novalido"){
 		estadoCivil=prompt("Estado civil: (1-Soltero/a,2-Casado/a,3-Divorciado/a,4-Viudo/a)");
 		switch (estadoCivil){
 			case "1":
 				document.getElementById('EstadoCivil').value="Soltero/a";
 				estadoCivil="valido";
 				break;
 			case "2":
 				document.getElementById('EstadoCivil').value="Casado/a";
 				estadoCivil="valido";
 				break;
 			case "3":
 				document.getElementById('EstadoCivil').value="Divorciado/a";
 				estadoCivil="valido";
 				break;
 			case "4":
 				document.getElementById('EstadoCivil').value="Viudo/a";
 				estadoCivil="valido";
 				break;
 			default:
 				estadoCivil="novalido";
 		}
 	}
 	sueldoBruto=0;
 	while (sueldoBruto<8000){
 		sueldoBruto=prompt("Ingrese su sueldo bruto. (no menos de 8000)");
 		sueldoBruto=parseInt(sueldoBruto);
 		document.getElementById('Sueldo').value="$ "+sueldoBruto;
 	}	
 	legajo=0;
 	while (legajo<1000){
 		legajo=prompt("Ingrese su numero de legajo: (4 cifras)");
 		legajo=parseInt(legajo);
 		document.getElementById('Legajo').value="legajo Nº "+legajo;
 	}
 	nacionadidad="novalido";
 	while(nacionadidad=="novalido"){
 		nacionadidad=prompt("Ingrese su nacionalidad: A-Argentino/a,E-Extranjero/a,N-Nacionalizado");
 		switch(nacionadidad){
 			case "a":
 				document.getElementById('Nacionalidad').value="Argentino/a";
 				nacionadidad="valido";
 				break;
 			case "A":
 				document.getElementById('Nacionalidad').value="Argentino/a";
 				nacionadidad="valido";
 				break;
 			case "E":
 				document.getElementById('Nacionalidad').value="Extranjero/a";
 				nacionadidad="valido";
 				break;
 			case "e":
 				document.getElementById('Nacionalidad').value="Extranjero/a";
 				nacionadidad="valido";
 				break;
 			case "n":
 				document.getElementById('Nacionalidad').value="Nacionalizado/a";
 				nacionadidad="valido";
 				break;
 			case "N":
 				document.getElementById('Nacionalidad').value="Nacionalizado/a";
 				nacionadidad="valido";
 				break;
 			default:
 				nacionadidad="novalido";
 		}

 	}
}
