let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
let res = input.reduce((a,b)=>a+b, 0);
console.log(res)