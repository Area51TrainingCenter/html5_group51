var popup = document.querySelector('.popup');

var btn_popupShow = document.querySelector('#popup-show');
btn_popupShow.onclick = function(event){
	// Evitamos el comportamiento por defecto del elemento.
	// En este caso al ser un LINK (tag A), evitamos que cambie la URL en la barra de direcciones.
	event.preventDefault();
	
	popup.style.display = 'block';
}

var btn_popupHide = document.querySelector('#popup-hide');
btn_popupHide.onclick = function(event){
	// Evitamos el comportamiento por defecto del elemento.
	// En este caso al ser un LINK (tag A), evitamos que cambie la URL en la barra de direcciones.
	event.preventDefault();

	popup.style.display = 'none';
}