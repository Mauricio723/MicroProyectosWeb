// Código JavaScript para pruebaCanvas

 function dibujaRectangulo() {
	    
		let myCanvas = document.getElementById("canvas01");
        
        //let myTemporizador = setTimeout(mostrarMensajePausa, 3000);  		
        let numeroDibujo = 0;		
             		
		if (myCanvas.getContext) {
		
		  let myContexto = myCanvas.getContext("2d");
		  
		  let myIntervalo = setInterval(function(){
			  if (numeroDibujo === 0) {
				  myContexto.strokeStyle = "rgb(200, 0, 0)";
		          myContexto.strokeRect(10, 10, 400, 200);				  
			  }
			  if (numeroDibujo === 2) {
				  myContexto.fillStyle = "rgb(0, 200, 0)";
		          myContexto.fillRect(20, 20, 200, 100);
			  }
			  if (numeroDibujo === 3) {
				  myContexto.fillStyle = "rgb(0, 0, 200)";
                  myContexto.fillRect(150, 100, 200, 100);
			  }
			  if (numeroDibujo === 4) {
				  myContexto.strokeStyle = "rgb(100, 70, 170)";
		          myContexto.strokeRect(100, 70, 420, 270);
			  }
			  if (numeroDibujo === 5) {
				  myContexto.fillStyle = "rgb(200, 110, 140)";
		          myContexto.fillRect(200, 220, 200, 110);
			  }
			  if (numeroDibujo === 6) {
				  myContexto.strokeStyle = "rgb(100, 70, 200)";
		          myContexto.strokeRect(140, 180, 400, 200);
			  }
			  if (numeroDibujo === 7) {
				  clearInterval(myIntervalo);
			  }
			  numeroDibujo++;
			  
		  }, 500);
		  		 
		  //window.setTimeout(mostrarMensajePausa, 1000);
		  		  
		} else {
		  alert("Su navegador no soporta Canvas");
		}
	  }			 
	

function inicioScript() {
		
	//alert("La página se terminó de cargar");
	
	let contextoCanvas = cargaContextoCanvas("canvas02");
	
	if (contextoCanvas) {
		
		contextoCanvas.fillStyle = "rgb(255, 0, 0)";
		
		for (i=0; i<=100; i+=10) {
			
			contextoCanvas.fillStyle = "rgb(" + (55 + i*2) + ", " + (20 + i*2) + ", 100)";
			
			contextoCanvas.fillRect(5+i*2, 5 + i, 40, 30);
			
		}
	}
	
}

// la siguiente función comprueba si se puede ejecutar canvas en el navegador.
// Recibe un identificador del elemento canvas y carga el canvas.
// Devuelve el contexto del canvas o false si no ha podido conseguirse.

function cargaContextoCanvas(idCanvas) {
	
	let elementoCanvas = document.getElementById(idCanvas);
	
	if (elementoCanvas && elementoCanvas.getContext) {
		
		let myContexto = elementoCanvas.getContext("2d");
		
		if (myContexto) {
			return myContexto;
		}
	}
	return false;
}

function mostrarImagen() {
	//alert("Dentro de la función mostrarImagen");
	
	let canvasConImagen = document.getElementById("canvasImagen01");
	
	let contextoCanvas = canvasConImagen.getContext("2d");
	
	let myImagen = new Image();
	
	myImagen.src = "ArchivosDoc_01/Planisferio_paralelos_merid.jpg";
	
	//myImagen.src ="ArchivosDoc_01/LogoMauricio_03.png";
	
	//LogoMauricio_03
	
	//alert("pausa para que se cargue la imágen");
	
	//contextoCanvas.drawImage(myImagen, 0, 0);
	
	myImagen.onload = function() {
		//console.log("dentro de myImagen_onload");
		
		//contextoCanvas.drawImage(myImagen, 0, 0);
		
		// Redimencionando la imagen
		
		contextoCanvas.drawImage(myImagen, 0, 0, 699, 499);
		
	}
	
}


// window.addEventListener("load", inicioScript, false);