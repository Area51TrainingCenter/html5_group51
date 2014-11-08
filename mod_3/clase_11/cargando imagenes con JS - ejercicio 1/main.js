console.log('Ready!');

var galeria = document.querySelectorAll('#galeria')[0];

var ulLista = document.createElement('ul');
galeria.appendChild(ulLista);

var img;
var liElemento;

var images = [
	'img1.jpg',
	'img2.jpeg',
	'img3.jpg',
	'img4.jpg',
	'img5.jpg'
];

var i;
for(i=0; i<images.length; ++i){
	img = document.createElement('img');
	img.src = 'images/' + images[i];

	liElemento = document.createElement('li');
	liElemento.appendChild(img);

	ulLista.appendChild(liElemento);
}

//djgonzalo.orgfree.com
