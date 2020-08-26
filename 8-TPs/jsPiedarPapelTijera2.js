var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 eleccionMaquina=Math.random();
	 eleccionMaquina*=3;
	 eleccionMaquina=Math.ceil(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina){
		case 1:
			alert("Empate");
			ContadorDeEmpates++;
			break;
		case 2:
			alert("Perdiste");
			ContadorDePerdidas++;
			break;
		case 3:
			alert("Ganaste");
			ContadorDeGanadas++;
	}
	mostrarResultado();
	comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina){
		case 1:
			alert("Ganaste");
			ContadorDeGanadas++;
			break;
		case 2:
			alert("Empate");
			ContadorDeEmpates++;
			break;
		case 3:
			alert("Perdiste");
			ContadorDePerdidas++;
	}
	mostrarResultado();
	comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
		case 1:
			alert("Perdiste");
			ContadorDePerdidas++;
			break;
		case 2:
			alert("Ganaste");
			ContadorDeGanadas++;
			break;
		case 3:
			alert("Empate");
			ContadorDeEmpates++;
	}
	mostrarResultado();
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value="Ganaste: "+ContadorDeGanadas;
	document.getElementById('empatadas').value="Empaste: "+ContadorDeEmpates;
	document.getElementById('perdidas').value="Perdiste: "+ContadorDePerdidas;
}