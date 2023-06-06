let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>parseInt(i))
console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input))+1);