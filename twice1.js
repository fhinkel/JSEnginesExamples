// time d8 --crankshaft twice1.js 

function twice( a ) { return a + a; }

var i = 0;
while (i++ < 1000000){
	twice(Math.random() > 0.5 ? 'a' : 4);
}
