function mostrar()
{

	var contador=0;
	var acumulador=0;
	var ingreso;

	while(contador<5){
		contador++;
		ingreso=prompt("Ingrese un numero");
		ingreso=parseInt(ingreso);
		acumulador+=ingreso;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN