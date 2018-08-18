// referencia registrada

var CbarraE = 4949;
var refE = "febi3456";

ejecucion();

function ejecucion () {


var Cbarra = prompt("INTRODUCIR CODIGO DE BARRA");
var ref = prompt("INTRODUCIR REF.");

if (CbarraE == Cbarra ) {
	alert("El codigo de barras es correcto")
}if (refE == ref) {
	alert("La referencia en correcta")
} else {
	alert("EL CODIGO DE BARRA NO PERTENECE A NINGUN ARTICULO INTRODUZCA LA REFERENCIA  A MANO");

	var Cbarra = prompt("INTRODUCIR CODIGO DE BARRA");
	var ref = prompt("INTRODUCIR REF.");

	alert("El codigo de barras esta registrado");
	alert("Codigo de barras: " + Cbarra + " REF: " + ref );
	
	var SiNo = prompt("Puedes registrar otro producto ¿Si / No?")

	if (SiNo == si) {
		ejecucion();
	}else {
		alert("Gracia por usarlo");
	}
	

};

}