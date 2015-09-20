//time d8 --trace-opt fibonacci.js

function fib(n) {
	if (n < 2) {
		return 1;	
	}
	return fib(n-1) + fib(n-2);

	eval("2+2"); // never executed
}

print(fib(35));