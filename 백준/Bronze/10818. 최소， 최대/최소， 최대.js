let [num, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.split(' ').map(i=>Number(i));
console.log(Math.min(...arr), Math.max(...arr));