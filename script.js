
function numberSquared (a) {
	return a * a;
}

function numberCubed(b) {
 	return b * b * b;
}

function numberQuad(c) {
	return c * c * c * c;
}

var mySum = numberSquared(numberCubed(numberQuad(3)));
alert(mySum);