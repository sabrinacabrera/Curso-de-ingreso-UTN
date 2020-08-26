function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var msj;

	numeroRandom=Math.ceil(Math.random()*10);
	if (numeroRandom>8) {
		msj="Su nota es un "+numeroRandom+" EXCELENTE";
	}else if(numeroRandom>3){
		msj="Su nota es un "+numeroRandom+" APROBO";
	}else{
		msj="Su nota es un "+numeroRandom+" Vamos,la proxima se puede";
	}
	alert(msj);

}//FIN DE LA FUNCIÓN