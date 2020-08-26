
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("ingrese la base");
	base=parseInt(base);
	altura=prompt("ingrese la altura");
	altura=parseInt(altura);
	superficie=base*altura/2;
	perimetro=base*3;
	alert("la superficie es "+superficie+ " y el perimetro es "+perimetro);

}
