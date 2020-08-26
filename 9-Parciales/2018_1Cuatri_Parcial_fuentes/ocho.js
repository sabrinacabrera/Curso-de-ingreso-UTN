function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contador=0;
	var numerosPares=0;
	var numerosImpares=0;
	var ceros=0;
	var promedioPositivos=0;
	var sumaNegativos=0;
	var numeromax;
	var numeroMin;
	var letraMax;
	var letraMin;
	var parImpar;
	var positivos=0;

	while(respuesta!="no"){
		letra=prompt("Ingrese una letra: ");
		numero=prompt("Ingrese un numero entre -100 y 100");
		numero=parseInt(numero);
		while(isNaN(numero)||numero<-100||numero>100){
			numero=prompt("Error,Ingrese un numero entre -100 y 100");
			numero=parseInt(numero);
		}
		contador++;
		parImpar=numero%2;
		if (parImpar==0) {
			numerosPares++;
		}else{
			numerosImpares++;
		}
		if (numero==0) {
			ceros++;
		}
		if (numero<0) {
			sumaNegativos+=numero;
		}else{
			promedioPositivos+=numero;
			positivos++;
		}
		if(contador==1){
			numeromax=numero;
			numeroMin=numero;
			letraMin=letra;
			letraMax=letra;
		}else if (numero>numeromax) {
			numeromax=numero;
			letraMax=letra;
		}else if(numero<numeroMin){
			numeroMin=numero;
			letraMin=letra;
		}
		respuesta=prompt("desea continuar?");
	}
	promedioPositivos=promedioPositivos/ (positivos-ceros);
	document.write("La cantidad de numeros pares es = "+numerosPares+"<br>");
	document.write("La cantidad de numeros impares es = "+numerosImpares+"<br>");
	document.write("La cantidad de ceros es = "+ceros+"<br>");
	document.write("El promedio de los numeros positivos es = "+ promedioPositivos+"<br>");
	document.write("La suma de numeros negativos es = "+sumaNegativos+"<br>");
	document.write("La letra y numero maximo es= "+letraMax+" y "+numeromax+", La letra y numero minimo es= "+letraMin+" y "+numeroMin+"<br>");

}
