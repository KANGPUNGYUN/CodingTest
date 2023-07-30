let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let res = [];

let prefix = new Array(N+1).fill(0);

arr.forEach((v,i)=> prefix[i+1] = prefix[i]+v);

for(let i=0; i<M; i++){
    let [start, end] = input[i+2].split(' ').map(Number);
    res.push(prefix[end]-prefix[start-1])
}
console.log(res.join('\n'))