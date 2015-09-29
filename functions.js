// d8 --allow-natives-syntax function.js


var f = function js() {
	return 'Hello JS';
};

var g = function css(b) {
	var a = 17;
	return  ['Hello CSS' . b, 34];
};

print(%HaveSameMap(f,g)); // true

f.x = 17;

print(%HaveSameMap(f,g)); //false
