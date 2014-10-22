/*
CASO 0

EL REQUERIMIENTO TEXTUALMENTE
si tenemos menos de 2 manzanas entonces comemos manzanas sino, si tenemos menos de 2 peras entonces hacemos ensalada sino hacemos jugo

EN PSEUDOCODIGO
si manzanas < 2 entonces
	comemos manzanas
sino si peras < 2 entonces
	hacemos ensalada
sino hola
	hacemos jugo

EN CODIGO
*/
var peras    = 10;
var manzanas = 3;

if(manzanas < 2){
	console.log('comemos manzanas')
} else if( peras < 2){
	console.log ('hacemos ensalada')
} else {
	console.log('hacemos jugo');
}



/*
CASO 1

EL REQUERIMIENTO TEXTUALMENTE
si son las 11am entonces tenemos break sino morimos de hambre.

EN PSEUDOCODIGO
si 11am entonces 
	break 
sino 
	morimos de hambre.

EN CODIGO
*/
var horaActual = 9;
var horaBreak = 11;

console.log('horaBreak:', horaBreak, ' == horaActual:', horaActual);

if( horaBreak == horaActual ) {
	console.log('break ');
} else {	
	console.log('morimos de hambre.');
}


/*
CASO 2

EL REQUERIMIENTO TEXTUALMENTE
si usuario logeado es administrador entonces accede sino regresa.

EN PSEUDOCODIGO
si usuario logeado es administrador entonces 
	accede 
sino 
	regresa.

EN CODIGO
*/

var TIPO_ADMINISTRADOR = 'administrador';
var TIPO_EDITOR = 'editor';

var usuario = {
	tipo: TIPO_EDITOR  // cambiar aqui entre TIPO_ADMINISTRADOR y TIPO_EDITOR
};

console.log(TIPO_ADMINISTRADOR, ' == usuario.tipo:', usuario.tipo);

if ( TIPO_ADMINISTRADOR == usuario.tipo ) {
	console.log("accede");
} else {
	console.log("regresa");
}


/*
	CASO 3
	si no hago la tarea entonces no recibo certificado sino recibo certificado
*/

var alumno = {
	hizoTarea: false // cambiar aqui entre true o false
};

if( alumno.hizoTarea ) {
	console.log('no recibo certificado')
} else {
	console.log('recibo certificado')
}

// --

/*
	CASO 1 manejando 2 horas de BREAK
*/
var horaActual = 9;
var horaBreak = [11, 13];

console.log('horaBreak:', horaBreak, ' == horaActual:', horaActual);

// Forma 1: else if
if( horaBreak[0] == horaActual ) {
	console.log('break 1');
} else if( horaBreak[1] == horaActual ) {
	console.log('break 2');
} else {
	console.log('morimos de hambre.');
}

// Forma 2: if anidado (if dentro de otro if)
if( horaBreak[0] == horaActual ) {
	console.log('break 1');
} else {

	if( horaBreak[1] == horaActual ) {
		console.log('break 2');
	} else {
		console.log('morimos de hambre.');
	}

}