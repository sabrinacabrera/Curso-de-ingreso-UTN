function mostrar()
{

	var numero;
	while(1){
		numero = prompt("ingrese un número entre 0 y 10.");
		if (numero>-1 && numero<11) {
			break;
		}
	}
	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN