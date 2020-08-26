/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

function mostrar()
{
	var animal;
	var peso;
	var temp;
	var respuesta;
	var cantTempPares=0;
	var nombrePesado;
	var tempPesado;
	var pesoPesado;
	var cantMenosCero=0;
	var promedio;
	var acumulador=0;
	var pesoMax=0;
	var pesoMin=0;
	var par;
	var contador=0;

	while(respuesta!="no"){
		contador++;
		animal=prompt("Ingrese el nombre del animal");
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1||peso>1000){
			peso=prompt("Eror,Ingrese el peso");
			peso=parseInt(peso);
		}
		temp=prompt("Ingrese la temperatura");
		temp=parseInt(temp);
		while(isNaN(temp)||temp<-30||temp>30){
			temp=prompt("Eror,Ingrese la temperatura");
			temp=parseInt(temp);
		}
		respuesta=prompt("Quiere continuar?");
		par=temp%2;
		if (par==0) {
			cantTempPares++;
		}
		if (contador==1){
			nombrePesado=animal;
			tempPesado=temp;
			pesoPesado=peso;
		}else if(peso>pesoPesado){
			nombrePesado=animal;
			tempPesado=temp;
			pesoPesado=peso;
		}
		if(temp<0){
			cantMenosCero++;
			if(contador==1){
				pesoMax=peso;
				pesoMin=peso;
			}else if(peso>pesoMax){
				pesoMax=peso;
			}else if(peso<pesoMin){
				pesoMin=peso;
			}
		}
		acumulador+=peso;
	}
	promedio=acumulador/contador;
	document.write("La cantidad de temperaturas pares es= "+cantTempPares+"<br>");
	document.write("El nombre del mas pesado es= "+nombrePesado+" y su temperatura es= "+tempPesado+"<br>");
	document.write("La cantidad de animales que viven a menos cero grados es = "+cantMenosCero+"<br>");
	document.write("El promedio del peso de todos los animales es= "+promedio+"<br>");
	if(pesoMax==0){
		document.write("No hubo animales con temperaturas bajo cero <br>");
	}else{
		document.write("El peso maximo es= "+pesoMax+" y el minimo es= "+pesoMin+" de los animales en temperatura bajo cero <br>");
	}
}
