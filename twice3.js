//d8 --trace-deopt twice3.js 

function twice( a ) {	
	return a + a;
}

var i = 0;
while (i++ < 1000000) {
	twice(4);
	if (i % 10000 == 0) {
		twice('a');
	}
}