let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
console.log(A*B)