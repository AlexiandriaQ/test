function addition() {
	let a = parseFloat(document.getElementById('a').value);
	let b = parseFloat(document.getElementById('b').value);

	let c = a + b;

	document.getElementById('result').innerHTML = a + " + " + b + " = " + Math.trunc(c * 100) / 100;
}

function reset() {
	document.getElementById('result').innerHTML = "";
}


