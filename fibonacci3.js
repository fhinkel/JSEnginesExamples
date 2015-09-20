// time d8 fibonacci3.js
var a = [1,1];

function fib(n) {
	if (typeof a[n] === 'undefined') {
		a[n] = fib(n-1) + fib(n-2);
	}
	return a[n];
	eval("2+2");
}

print(fib(35));