
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	largo=prompt("Ingrese el largo:");
	largo=parseInt(largo);
	ancho=prompt("Ingrese el largo:");
	ancho=parseInt(ancho);
	perimetro=largo*2+ancho*2;

	alert("La superficie del rectangulo es de: "+perimetro+"metros");
}
