function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	while(respuesta=="si"){
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if (numero>=0){
			positivo+=numero;
		}else{
			negativo*=numero;
		}
		respuesta=prompt("desea continuar","si");
	}


	document.getElementById('suma').value=positivo;	
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN