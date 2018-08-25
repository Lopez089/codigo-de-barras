ejecucion();


function ejecucion () {


	var Cbarra = prompt("INTRODUCIR CODIGO DE BARRA");
	var ref = prompt("INTRODUCIR REF.");

	
	var guardado = localStorage.getItem(ref);
	var guardadoj = JSON.parse(guardado)

	if (guardadoj != null) {
		var buscarCbarra = guardadoj.CodigoDeBarra;
		var buscarRef = guardadoj.Ref;
			alert("El codigo de barras es correcto")
			alert("La referencia en correcta")
	}else {
		alert("EL CODIGO DE BARRA NO PERTENECE A NINGUN ARTICULO INTRODUCIREMOS LA REF EN EL SISTEMA GRACIAS");

		GuardarLocal()
			function GuardarLocal() {
			    
				var producto = {
					CodigoDeBarra: Cbarra,
					Ref: ref,
				};
				
					localStorage.setItem(producto.Ref, JSON.stringify(producto));

			}

		alert("El codigo de barras esta registrado");
		alert("Codigo de barras: " + Cbarra + " REF: " + ref );

		var SiNo = prompt("Puedes registrar otro producto ¿Si / No?")

		if (SiNo == "si") {
			ejecucion();
		}else {
			alert("Gracia por usarlo");
		}
	}
};