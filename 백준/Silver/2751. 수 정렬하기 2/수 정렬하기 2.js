let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let res = input.sort((a,b)=>a-b);
console.log(res.join('\n'))