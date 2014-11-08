// CLICK!

var link = document.querySelector('#btn-popup');

link.onclick = function(event){
	event.preventDefault();
	
	console.log('click!');
}


// LOAD

var imgURL = 'http://images6.alphacoders.com/451/451028.jpg';

var imgElement = document.createElement('img');
imgElement.style.width = '200px';

imgElement.onload = function(){
	console.log('imagen cargada!');
};

console.log('imagen inicia carga...');
imgElement.src = imgURL;


//var body = document.querySelector('body');
//body.appendChild(imgElement);
