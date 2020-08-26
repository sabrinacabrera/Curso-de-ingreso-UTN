function mostrar()
{
	var edad;
	var msj;

	edad=document.getElementById('edad').value;
	if (edad>17) {
		msj="Usted es mayor de edad";
	}else if(edad>12){
		msj="usted es adolescente";
	}else {
		msj="Usted es un niño";
	}
	alert(msj);
}//FIN DE LA FUNCIÓN