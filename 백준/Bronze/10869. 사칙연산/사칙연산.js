let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);