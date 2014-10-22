
var i;
for(i = 0; i < 10; ++i) {
	console.log(i + 1);
}

function multiplicar(a, b){
	return a * b;
}

/* Tipo Metodo (no retorna resultados) */
function tablaMultiplicar(numero){
	var i;
	var n;
	for(i = 0; i < 12; ++i) {
		n = i + 1;
		console.log( n + ' x ' + numero + ' = ' + multiplicar(n, numero));
	}
}
tablaMultiplicar(3);
tablaMultiplicar(6);


