
var CbarraE = 3223
var refE = 3434


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

	var productoList = []

	var Cbarra = prompt("INTRODUCIR CODIGO DE BARRA");
	var ref = prompt("INTRODUCIR REF.");

	alert("El codigo de barras esta registrado");
	alert("Codigo de barras: " + Cbarra + " REF: " + ref );

	GuardarLocal()

	function GuardarLocal() {
    
	let producto={
		CodigoDeBarra: Cbarra,
		Ref: ref,
	};
	productoList.push(producto);

	localStorage.setItem(producto.Ref, JSON.stringify(producto));

for (i = 0; i < 10; i++) {

}

}
	var SiNo = prompt("Puedes registrar otro producto ¿Si / No?")

	if (SiNo == "si") {
		ejecucion();
	}else {
		alert("Gracia por usarlo");
	}
	


};
}