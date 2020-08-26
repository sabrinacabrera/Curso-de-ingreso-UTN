function mostrar()
{
	var edad;
	var msj;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	if (edad<18 && estadoCivil!="Soltero"){
	}else if (!(edad<18) && estadoCivil=="Soltero") {
		msj="Es soltero y no es menor";
		alert(msj);
	}
}//FIN DE LA FUNCIÓN