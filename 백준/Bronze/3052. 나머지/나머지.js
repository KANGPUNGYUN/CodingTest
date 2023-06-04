let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];
for(let i=0; i<input.length; i++){
    arr.push(input[i]%42);
}
console.log([...new Set(arr)].length)