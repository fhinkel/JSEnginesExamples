//time d8 fibonacci2.js

function fib(n) {
	if (n < 2) {
		return 1;	
	}
	return fib(n-1) + fib(n-2);

	//eval("2+2");
}

print(fib(35));
