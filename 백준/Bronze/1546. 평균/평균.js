let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(i=>parseInt(i));
let max = Math.max(...arr);
let sum = arr.reduce((acc,cur)=>acc+=(cur/max*100), 0)
console.log(sum/arr.length)