function calcularSuma() {
	var num1=parseInt(document.getElementById('number1').value);
	var num2=parseInt(document.getElementById('number2').value);
	var num3=parseInt(document.getElementById('number3').value);
	var num4=parseInt(document.getElementById('number4').value);
	var num5=parseInt(document.getElementById('number5').value);
	
	var suma = num1 + num2 + num3 + num4 + num5;
	document.getElementById('resultado').textContent = 'La suma es ' + suma;
}