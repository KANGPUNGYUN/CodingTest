//(A+B)×(A-B)
let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
console.log((a+b)*(a-b))