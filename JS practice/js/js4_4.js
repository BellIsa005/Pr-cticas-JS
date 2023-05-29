function digitos() {
	var num=document.getElementById('numbers').value;
	var suma=0
	for (var i=0; i<num.length; i++){
		suma++;
	}
	document.write('Número con ', suma, ' dígitos')
}