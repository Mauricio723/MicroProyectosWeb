/* Scripts para fraces célebres 01 */

let elementosDivItem;
let indiceItem = 0;
let elementoControlAnterior;
let elementoControlSiguiente;

function iniciarScript() {
	
	elementosDivItem = document.querySelectorAll(".div_item_frace");
	
	elementoControlAnterior = document.getElementById("id_anterior");
	elementoControlSiguiente = document.getElementById("id_siguiente");
	
	elementoControlAnterior.addEventListener("click", verFraceAnterior, false);
	elementoControlSiguiente.addEventListener("click", verFraceSiguiente, false);
	
	for (i=1; i<elementosDivItem.length; i++) {				
		elementosDivItem[i].hidden = true;		
	}
}

function verFraceAnterior() {
	//console.log("VerFraceAnterior");
	if (indiceItem > 0) {
		elementosDivItem[indiceItem].hidden = true;	
		indiceItem--;
		elementosDivItem[indiceItem].hidden = false;	
	} else {		
		elementosDivItem[indiceItem].hidden = true;
		indiceItem = elementosDivItem.length - 1;
		elementosDivItem[indiceItem].hidden = false;
	}	
}
function verFraceSiguiente() {
	//console.log("verFraceSiguiente");
	if (indiceItem < elementosDivItem.length - 1) {
		elementosDivItem[indiceItem].hidden = true;
		indiceItem++;
		elementosDivItem[indiceItem].hidden = false;
	} else {		
		elementosDivItem[indiceItem].hidden = true;
		indiceItem = 0;
		elementosDivItem[indiceItem].hidden = false;
	}		
}

window.addEventListener("load", iniciarScript, false);