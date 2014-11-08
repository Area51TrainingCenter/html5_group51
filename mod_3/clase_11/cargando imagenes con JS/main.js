console.log('Ready!');

var img;
var galeria;

galeria = document.querySelectorAll('#galeria')[0];

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
	galeria.appendChild(img);
}

//djgonzalo.orgfree.com
