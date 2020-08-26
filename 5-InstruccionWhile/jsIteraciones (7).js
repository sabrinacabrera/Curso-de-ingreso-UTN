function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si"){
		contador++;
		ingreso=prompt("Ingrese un numero");
		ingreso=parseInt(ingreso);
		acumulador+=ingreso;
		respuesta=prompt("desea continuar sumando?","Ingrese si o no");
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN