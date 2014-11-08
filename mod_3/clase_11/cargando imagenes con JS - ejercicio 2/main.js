var aElement;

var navElement = document.createElement('nav');
navElement.id = "menu";

//var bodyElement = document.querySelectorAll('body')[0];
var bodyElement = document.querySelector('body');
bodyElement.appendChild(navElement);

var links = ['home', 'services', 'contact'];
var i;
for(i=0; i<links.length; ++i){
	aElement = document.createElement('a');
	aElement.href = '#' + links[i];

	navElement.appendChild(aElement);
}
