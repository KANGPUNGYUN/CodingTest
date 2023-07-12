let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input.shift());
let arr = input.shift().split(' ').map(i=>Number(i)).sort((a,b)=>a-b);
let res = 0;

for(let i=0; i<n; i++){
    res += arr[i]*[n-i]
}

console.log(res)