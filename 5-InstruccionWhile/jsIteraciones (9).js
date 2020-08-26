function mostrar()
{
	var contador=0;
	var numero=0;
	var max;
	var min;
	var respuesta='si';

	while(respuesta!='no')
	{	
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if (contador==1){
			max=numero;
			min=numero;
		}else if(numero>max){
			max=numero;
		}else if(numero<min){
			min=numero;
		}
		respuesta=prompt("ingrese no para salir");
	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;
}//FIN DE LA FUNCIÓN