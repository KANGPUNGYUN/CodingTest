let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split('').map(i=>Number(i)).reduce((acc,cur)=>acc+cur,0)
console.log(input)