//var popup = document.querySelector('.popup');
var popup = $('.popup');

//var btn_popupShow = document.querySelector('#popup-show');
var btn_popupShow = $('#popup-show');

//btn_popupShow.onclick = function(event){
btn_popupShow.on('click', function(event){

	// Evitamos el comportamiento por defecto del elemento.
	// En este caso al ser un LINK (tag A), evitamos que cambie la URL en la barra de direcciones.
	event.preventDefault();
	
	//popup.style.display = 'block';
	popup.css('display', 'block');
}); // <-- no olvidar cerrar con un parentesis

//var btn_popupHide = document.querySelector('#popup-hide');
var btn_popupHide = $('#popup-hide');

//btn_popupHide.onclick = function(event){
btn_popupHide.on('click', function(event){

	// Evitamos el comportamiento por defecto del elemento.
	// En este caso al ser un LINK (tag A), evitamos que cambie la URL en la barra de direcciones.
	event.preventDefault();

	//popup.style.display = 'none';
	popup.css('display', 'none');
}); // <-- no olvidar cerrar con un parentesis