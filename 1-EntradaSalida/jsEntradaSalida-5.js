/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var age;
	var name;
	name=document.getElementById('elNombre').value;
	age=document.getElementById('laEdad').value;
	alert("Usted se llama "+name+" y su tiene "+age+" años");
}

