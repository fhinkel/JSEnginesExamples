// d8 --allow_natives_syntax classes.js

var a = {}
a.x = 8;
a.y = 8;

var b = {}
b.x = 3;
b.y = 9;

print(%HaveSameMap(a, b));  // true
a.z = 1;
print(%HaveSameMap(a, b));  // false