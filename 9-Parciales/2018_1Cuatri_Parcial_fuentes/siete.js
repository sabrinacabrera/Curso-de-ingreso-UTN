//maria f 15
//jose m 33
//fer f 25

function mostrar()
{
	var contador;
	var edad;
	var nombre;
	var sexo;
	contador=0;
	var cantM=0;
	var cantV=0;
	var	cantMenor=0;
	var	cantMayor=0;
	var cantMujeresMayores=0;
	var cantVaronesMayores=0;
	var cantMujeresMenores=0;
	var cantVaronesMenores=0;
	var promedioTotal;
	var promedioMujeres;
	var promedioVarones;
	var sumatotal=0;
	var sumaM=0;
	var sumaV=0;
	var nombreMayor;
	var nombreMenor;
	var nombreMujerMayor;
	var maxM;
	var maxV;
	var edadmayor;
	var edadmenor;
	var sexoMayor;
	var sexoMenor;
	var sexoMultiplo;

	while (contador<3){
		contador++;
		nombre=prompt("Ingrese su nombre","fede");
		sexo=prompt("ingrese su sexo (f:Femenino o m:Masculino)","f");
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("ingrese su sexo (f:Femenino o m:Masculino)");
		}
		edad=prompt("ingrese su edad","23");
		edad=parseInt(edad);
		while(isNaN(edad)||edad>100||edad<0){
			edad=prompt("ingrese su edad");
			edad=parseInt(edad);
		}

		if(contador==1){
			edadmayor=edad;
			edadmenor=edad;
			nombreMayor=nombre;
			nombreMenor=nombre;
			sexoMayor=sexo;
			sexoMenor=sexo;
		}else if(edad>edadmayor){
			sexoMayor=sexo;
			edadmayor=edad;
			nombreMayor=nombre;
		}else if(edad<edadmenor){
			sexoMenor=sexo;
			nombreMenor=nombre;
			edadmenor=edad;
		}

		if (edad>17) {
			cantMayor++;
			if (sexo=="f") {
				if (contador==1){
					maxM=edad;
					nombreMujerMayor=nombre;
				}else{
					if(maxM<edad){
						nombreMujerMayor=nombre;
						maxM=edad;
						}
				}
				cantM++;
				sumaM+=edad;
				cantMujeresMayores++;
			}else{
				cantV++;
				sumaV+=edad;
				cantVaronesMayores++;
			}
		}else {
			cantMenor++;
			if (sexo=="f") {
				if (contador==1){
					maxM=edad;
					nombreMujerMayor=nombre;
				}else{
					if(maxM>edad){
						nombreMujerMayor=nombre;
						maxM=edad;
						}
				}
				cantM++;
				sumaM+=edad;
				cantMujeresMenores++;
			}else{
				cantV++;
				sumaV+=edad;
				cantVaronesMenores++;
			}
		}
		sexoMultiplo=edad%5;
		if (sexoMultiplo==0){
			sexoMultiplo=sexo;
		}			
	}

	/*punto uno
	A-cantid de mujeres
	B-cantidad de varones
	C-Cantidad de menores
	D-Cantidad de mayores
	*/ 
	document.write("1-<br>A-Cantidad de mujeres= "+cantM+"<br>");
	document.write("B-Cantidad de varones= "+cantV+"<br>");
	document.write("C-Cantidad de menores="+cantMenor+"<br>");
	document.write("D-Cantidad de mayores= "+cantMayor+"<br>");
	/*Punto dos
	A-Cantidad de mujeres mayores
	B-cantidad de varones mayores
	c-Cantidad de mujeres menores
	D-cantidad de varones menores
	*/
	document.write("2-<br>A-Cantidad de mujeres mayores= "+cantMujeresMayores+"<br>");
	document.write("B-Cantidad de varones mayores= "+cantVaronesMayores+"<br>");
	document.write("C-Cantidad de mujeres menores="+cantMujeresMenores+"<br>");
	document.write("D-Cantidad de varones menores= "+cantVaronesMenores+"<br>");
	/*Punto Tres
	A-promedio total
	B-promedio varones
	C-promedio mujeres
	*/
	sumatotal=sumaV+sumaM;
	promedioTotal=sumatotal/contador;
	promedioMujeres=sumaM/cantM;
	promedioVarones=sumaV/cantV;
	document.write("3-<br>A-Promedio total= "+promedioTotal+"<br>");
	document.write("B-Promedio varones= "+promedioVarones+"<br>");
	document.write("C-Promedio mujeres="+promedioMujeres+"<br>");
	/*Punto cuatro
	A-Nombre mayor
	B-Nombre menor
	C-Nombre mujer mayor
	*/
	document.write("4-<br>A-Nombre mayor= "+nombreMayor+"<br>");
	document.write("B-Nombre menor= "+nombreMenor+"<br>");
	document.write("C-Nombre mujer mayor="+nombreMujerMayor+"<br>");
	/*Punto cinco
	A-sexo del mayor
	B-sexo del menor
	C-sexo de la persona cuya edad sea multiplo de cinco
	*/
	document.write("4-<br>A-Sexo del mayor= "+sexoMayor+"<br>");
	document.write("B-Sexo del menor= "+sexoMenor+"<br>");
	document.write("C-sexo edad multiplo de 5="+sexoMultiplo+"<br>");
	
}
