// time d8 --crankshaft twice2.js 

function twiceString( a ) {	return a + a; }

function twiceInt( a ) { return a + a; }

var i = 0;
while (i++ < 1000000) {
	Math.random() > 0.5 
	? twiceString('a') 
	: twiceInt(4);
}