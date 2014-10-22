
function calendario(){
	var meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Setiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	];
	var indice;
	
	for (indice=0; indice < 12; ++indice){
		console.log( meses[indice] );
	}
}
calendario();