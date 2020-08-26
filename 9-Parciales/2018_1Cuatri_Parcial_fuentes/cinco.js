/*
Enunciado:
Bienvenidos. 
(SWITCH)pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en 
minúscula (Mercurio y Venus están antes que
 la tierra).
*/
function mostrar()
{
	var planeta;
	var msj;

	planeta=prompt("Ingrese un planeta del sistema solar");
	switch (planeta){
		case "mercurio":
		case "venus":
			msj="aca hace mas calor";
			break;
		case "tierra":
			msj="aca vivimos";
			break;
		case "jupiter":
		case "marte":
		case "neptuno":
		case "urano":
		case "pluton":
			msj="aca hace mas frio";
			break;
		default:
			msj="El planeta ingresado no es valido";

	}
	alert(msj);
}
