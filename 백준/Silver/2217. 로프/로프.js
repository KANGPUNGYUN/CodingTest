let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let arr = input.sort((a,b)=>a-b);
let min = arr[0]*n;
for (let i=1; i<n; i++) {
    let weight = arr[i]*(n-i);
    if (min < weight) min = weight;
}
console.log(min);