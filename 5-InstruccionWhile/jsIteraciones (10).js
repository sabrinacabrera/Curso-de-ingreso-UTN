function mostrar()
{
	var numeroingresado;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var cantPositivos;
	var cantNegativos;
	var cantCeros;
	var cantPares;
	var promPositivos;
	var promNegativos;
	var diferencia;

	cantNegativos=0;
	cantPares=0;
	cantCeros=0;
	cantPositivos=0;
	sumaNegativos=0;
	sumaPositivos=0;

	while(respuesta!="no")
	{
		numeroingresado=prompt("ingrese un numero");
		numeroingresado=parseInt(numeroingresado);
		if(numeroingresado<0){
			cantNegativos++;
			sumaNegativos+=numeroingresado;
		}else if (numeroingresado>0) {
			cantPositivos++;
			sumaPositivos+=numeroingresado;
		}else{
			cantCeros++;
		}
		respuesta=prompt("desea ingresar otro numero?","si");
	}
	promNegativos=sumaNegativos/cantNegativos;
	promPositivos=sumaPositivos/cantPositivos;
	if (cantNegativos==0) {
		promNegativos=0;
	}
	if (cantPositivos==0) {
		promPositivos=0;
	}
	
	diferencia=sumaPositivos- sumaNegativos;
	alert("suma negativos= "+sumaNegativos+" ,suma positivos= "+sumaPositivos+" ,cantidad de positivos= "+cantPositivos+" ,cantidad de negativos= "+cantNegativos+" ,cantidad de ceros= "+cantCeros+" ,Promedio negativos= "+promNegativos+" ,Promedio de positivos= "+promPositivos+" y diferencia= "+diferencia);

}//FIN DE LA FUNCIÓN