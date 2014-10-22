
/* Metodo */
function sumar(primerParametro, segundoParametro){
	console.log(primerParametro + segundoParametro);
}
sumar(3, 5);

/* Function */
function restar(primerParametro, segundoParametro){
	var resultado = primerParametro - segundoParametro;
	return resultado;
}
var resultadoResta = restar(3, 5);
//var resultadoResta = -2;

function multiplicar(primerParametro, segundoParametro){
	var resultado = primerParametro * segundoParametro;
	return resultado;
}
var resultadoResta = multiplicar(3, 5);

function potencia(primerParametro, segundoParametro){
	var resultado = Math.pow(primerParametro, segundoParametro);
	return resultado;
}
potencia(3, 2);

