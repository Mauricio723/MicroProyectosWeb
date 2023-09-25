/* Script AprendizDeTodo */

  let colorFondoNuevo;  
  let colorTextoNuevo;
	
  let colorOscuro;
  let colorClaro;   
  
  let rootVariableStyle;
  
  let valorInputRadio;
  
  let sizeTextoNuevo;
  
function inicioApp() {
		    	
	rootVariableStyle = document.documentElement;
	
	colorOscuro = "black";
	colorClaro = "white";
	
	obtenerValorInputRadio();	 	
		
}
 
    function obtenerValorInputRadio() {
	    	
		valorInputRadio = document.querySelector('input[name="colores_pagina"]:checked').value
					
		establecerColoresPagina();	
		
    }      		
		
	function establecerColoresPagina() {
		
		if (valorInputRadio === "fondo_claro") {
			
			colorFondoNuevo = colorClaro;
			colorTextoNuevo = colorOscuro;
						
		} 
		if (valorInputRadio === "fondo_oscuro") {
			
			colorFondoNuevo = colorOscuro;
			colorTextoNuevo = colorClaro;
						
		}
				
		rootVariableStyle.style.setProperty("--color_fondo_01", colorFondoNuevo);
		rootVariableStyle.style.setProperty("--color_texto_01", colorTextoNuevo);
		
	}	
	
	function changeSelectOscuro() {		
		colorOscuro = document.getElementById("colorOscuroSelect").value;		
		establecerColoresPagina();		
	}
	
	function changeSelectClaro() {
		colorClaro = document.getElementById("colorClaroSelect").value;
		establecerColoresPagina();
	}
	 	
	function cambiarSizeTexto() {
		
		sizeTextoNuevo = document.getElementById("sizeTexto").value;
		rootVariableStyle.style.setProperty("--size_texto_01", sizeTextoNuevo);
		
	}
	
	window.addEventListener("load", inicioApp, false);
	