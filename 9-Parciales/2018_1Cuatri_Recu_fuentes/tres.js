function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioConDescuento;
	var iva;
	var soloIva;
	

	precio=prompt("ingrese el precio ","00.0");
	precio=parseInt(precio);
	porcentaje=prompt("ingrese el porcentaje ","00.0");
	porcentaje=parseInt(porcentaje);
	descuento=precio*porcentaje/100;
	precioConDescuento=precio-precio*porcentaje/100;
	iva=precioConDescuento*1.21;
	soloIva=precioConDescuento*21/100;
	document.getElementById('elPrecioFinal').value=iva;
	alert("el descuento es de: "+descuento+" ,el precio con el descuento es de:"+precioConDescuento+" y el con el iva es: "+soloIva);

}
