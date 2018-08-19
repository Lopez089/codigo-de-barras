ejecucion();

function ejecucion () {


var Cbarra = prompt("INTRODUCIR CODIGO DE BARRA");
var ref = prompt("INTRODUCIR REF.");

var buscarCbarra = localStorage.getItem(Cbarra);
var buscarRef = localStorage.getItem(ref);

console.log(buscarCbarra)
console.log(buscarRef)

if (Cbarra = buscarCbarra ) {
	alert("El codigo de barras es correcto")
}if(ref = buscarRef) {
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

}
	var SiNo = prompt("Puedes registrar otro producto ¿Si / No?")

	if (SiNo == "si") {
		ejecucion();
	}else {
		alert("Gracia por usarlo");
	}
	


};
}