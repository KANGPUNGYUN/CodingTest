let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input.shift();
let arr = input.map(v=>v.split(' '));
arr.sort((a,b)=>Number(a[0])-Number(b[0]))
let res = []
for(let i=0; i<num; i++){
    res.push(arr[i].join(' '));
}
console.log(res.join('\n'));