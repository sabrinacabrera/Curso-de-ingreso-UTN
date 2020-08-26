
function mostrar()
{
	var marca;	
	var peso;
	var temperatura;
	var temperaturasPares=0;
	var respuesta;
	var	conserva0Grados=0;
	var promedio;
	var contador=0;
	var pesoMaximo;
	var pesoMinimo;
	var par;
	var marcaMasPesada;
	var acumuladorProductos=0;
	while(respuesta!="no")
		{
			contador++;
			marca=prompt("ingrese la marca");
			peso=prompt("ingrese el peso");
			peso=parseInt(peso);
			while(isNaN(peso)||peso<1||peso>100){
				peso=prompt("ingrese el peso");
				peso=parseInt(peso);
			}
			temperatura=prompt("ingrese la temperatura");
			temperatura=parseInt(temperatura);
			while(isNaN(temperatura)||temperatura<-30||temperatura>30)
			{
				temperatura=prompt("ingrese la temperatura");
				temperatura=parseInt(temperatura);
			}
			respuesta=prompt("desea continuar ingresando?");

			par=temperatura%2;
			if(par==0){
				temperaturasPares++;
			}
			if(contador==1){
				pesoMinimo=peso;
				pesoMaximo=peso;
				marcaMasPesada=marca;
			}else if (peso>pesoMaximo) {
				marcaMasPesada=marca;
				pesoMaximo=peso;
			}else if(peso<pesoMinimo){
				pesoMinimo=peso;
			}
			if(temperatura<0){
				conserva0Grados++;				
			}
			acumuladorProductos+=peso;
	}
	promedio=acumuladorProductos/contador;
	
	//a)la cantidad de temperaturas pares.
	document.write("La cantidad de productos pares es= "+temperaturasPares+"<br>"); 
	//b) La marca del producto más pesado
	document.write("La marca del producto mas pesado es= "+marcaMasPesada+"<br>");
	//c) La cantidad de productos que se conservan a menos de 0 grados. 
	document.write("La cantidad de productos que se conservan a menos de 0 grados es= "+conserva0Grados+"<br>");
	//d) El promedio del peso de todos los productos.	
	document.write("El promedio del peso de todos los productos es= "+promedio+"<br>");
	//f) El peso máximo y el mínimo
	document.write("El peso maximo es= "+pesoMaximo+" y el minimo es= "+pesoMinimo+"<br>");
}