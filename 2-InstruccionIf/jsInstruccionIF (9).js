function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.ceil(Math.random()*10);
	document.getElementById('numeroRandom').value=numeroRandom;


}//FIN DE LA FUNCIÓN