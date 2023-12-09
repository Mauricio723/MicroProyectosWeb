/* Script para Prueba_APIs_01 */

const myApiKey = "899aedcac7e60be0862511c9b9169f91";
let latitudCiudad;
let longitudCiudad;

function obtenerDatosCiudad() {
   	
	if (document.getElementById("ciudadIngresada").value.length != 0 ) {
		
		let nombreCiudad = document.getElementById("ciudadIngresada").value;
	    		
		//let urlApiGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + nombreCiudad + 
		  //               "&limit=5&appid=899aedcac7e60be0862511c9b9169f91";
		
		let urlApiGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + nombreCiudad + 
		                 "&limit=5&appid=" + myApiKey;
		
		let datosObtenidos = "";
		
	    //let latitud = "";
	    //let longitud = "";
		
        fetch(urlApiGeo)
            .then(response => response.json())
		    .then(datos => {
		        datosObtenidos = datos;
			    
				//console.log("Datos obtenidos: " + JSON.stringify(datosObtenidos));
				
				latitudCiudad = datosObtenidos[0].lat;
				longitudCiudad = datosObtenidos[0].lon;
			
			    mostrarDatosGeo(datosObtenidos);
			    
		    })
			.catch(error => {
				console.error(error);
			});
			
		
	} else {
		alert("Debe ingresar una ciudad en el input");
	}
	   		
}

function mostrarDatosGeo(datosGeo) {
	      //console.log("Datos obtenidos, dentro de mostrarDatosGeo: " + JSON.stringify(datosGeo));
		  
		  //console.log("nombre Ciudad: " + datosGeo[0].name);
		  //console.log("Nombre local: " + datosGeo[0].local_names.es);
		  //console.log("Latitud: " + datosGeo[0].lat);
		  //console.log("Longitud: " + datosGeo[0].lon);
		  //console.log("Pais: " + datosGeo[0].country);
		  //console.log("Provincia: " + datosGeo[0].state);
		  
		  let elementoDatos = document.getElementById("divDatosGeo");
		  
		  //console.log("Datos obtenidos: " + JSON.stringify(datosGeo));
		  
		  //console.log("largo arreglo: " + datosGeo.length);
		  
		  elementoDatos.innerHTML = "<p>Nombre Ciudad = " + datosGeo[0].name + "</p><p>Latitud: " + 
									 datosGeo[0].lat + "</p><p>Longitud: " + datosGeo[0].lon + 
									 "</p><p>Pais: " + datosGeo[0].country + "</p><p>Provincia: " 
									 + datosGeo[0].state + "</p>";
		  	
			
	  }		
	  
function obtenerClima() {
	
	let datosClima;
	let urlApiClima = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitudCiudad +
	                 "&lon=" + longitudCiudad + "&appid=" + myApiKey + "&units=metric&lang=es";
    
	if (latitudCiudad != undefined && longitudCiudad != undefined) {
		
		fetch(urlApiClima)
            .then(response => response.json())
		    .then(datos => {
		        datosClima = datos;
			    
				//console.log("Datos obtenidos: " + JSON.stringify(datosClima));							
			    mostrarDatosClima(datosClima);
				
		    })
			.catch(error => {
				console.error(error);
			});	
		
	} else {
		alert("Faltan datos de ubicación geográfica");
	}
	    
}

function mostrarDatosClima(datosObtenidos) {
	
	//console.log("datos obtenidos en mostrarDatosClima: " + JSON.stringify(datosObtenidos));
	
	let elementoDatosClima = document.getElementById("id_div_datos_clima");
	
	elementoDatosClima.innerHTML = "<p>Datos Clima</p><p>lluvias</p><p>" + datosObtenidos.weather[0].description 
	                               + "</p><p>Temperatura actual: " + datosObtenidos.main.temp + " °C</p><p>" 
								   + "presión: " + datosObtenidos.main.pressure + " hPa</p><p>" +
								   "Humedad: " + datosObtenidos.main.humidity + " % </p>";
	
}