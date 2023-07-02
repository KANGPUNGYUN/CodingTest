let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = []

for(let i=0; i<input.length; i++){
    let arr = input[i].split(' ').map(v=>Number(v));
    res[i] = arr;
}

res = res.sort((a, b)=>a[0]-b[0]);
res = res.sort((a, b)=>a[1]-b[1]);

console.log(res.join('\n').split(',').join(' '));