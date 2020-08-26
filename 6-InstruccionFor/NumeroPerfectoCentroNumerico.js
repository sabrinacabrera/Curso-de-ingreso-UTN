function mostrar()
{	
	/*Numero perfecto
	
	var numeroIngresado;
	var sumaDeDivisores;
	var numerosDivisores;
	var numerosRecorridos;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	for(numerosRecorridos=numeroIngresado;numerosRecorridos>0;numerosRecorridos--){
		sumaDeDivisores=0;
		for(numerosDivisores=numerosRecorridos/2;numerosDivisores>0;numerosDivisores--){
			if(numerosRecorridos%numerosDivisores==0){
				sumaDeDivisores+=numerosDivisores;
			}
		}
		if(sumaDeDivisores==numerosRecorridos){
			console.log(numerosRecorridos+" Es un numero perfecto");
		}
	}	
	*/ //NUMERO PERFECTO
	var numeroIngresado;
	var sumaDeNumerosAnteriores;
	var sumaDeNumerospoesteriores;
	var contador;
	var numerosRecorridos;
	var cantidadDeCentrosNumericos;

	numeroIngresado=prompt("ingrese cuantos centros numericos desea ver");
	numeroIngresado=parseInt(numeroIngresado);
	cantidadDeCentrosNumericos=0;
	for(numerosRecorridos=6;cantidadDeCentrosNumericos<numeroIngresado;numerosRecorridos++){
		sumaDeNumerosAnteriores=0;
		sumaDeNumerospoesteriores=0;
		for(contador=1;contador<numerosRecorridos;contador++){
			sumaDeNumerosAnteriores=sumaDeNumerosAnteriores+(numerosRecorridos-contador);
		}	
		for(contador=1;;contador++){
			sumaDeNumerospoesteriores+=numerosRecorridos+contador;
			if(sumaDeNumerospoesteriores==sumaDeNumerosAnteriores){
				cantidadDeCentrosNumericos++;
				console.log(numerosRecorridos+" Es un centro numerico");
				break;
			}else if (sumaDeNumerospoesteriores>sumaDeNumerosAnteriores){
				break;
			}
		}//Centro numerico
}
	
}//FIN DE LA FUNCIÓN