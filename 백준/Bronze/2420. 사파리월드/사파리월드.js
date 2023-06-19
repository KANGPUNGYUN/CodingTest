let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
console.log(Math.abs(a-b));