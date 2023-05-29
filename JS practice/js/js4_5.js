function promedio() {
	var num1=parseInt(document.getElementById('number1').value);
	var num2=parseInt(document.getElementById('number2').value);
	var num3=parseInt(document.getElementById('number3').value);
	
	let result=((num1+num2+num3)/3);
	document.getElementById('resultado').textContent = 'El promedio es ' + result;
}