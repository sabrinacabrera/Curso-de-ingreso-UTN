/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var name;
	name=prompt("ingrese su nombre","Federico");
	document.getElementById('elNombre').value=name;
}

