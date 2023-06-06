function parImpar() {
	var num = parseInt(prompt('Introduce un número entero: '));
	if (num%2 == 0) {
		document.getElementById('resultado').textContent = 'El '+num+' es PAR';
	}else{
		document.getElementById('resultado').textContent = 'El '+num+' es IMPAR';
	}
}