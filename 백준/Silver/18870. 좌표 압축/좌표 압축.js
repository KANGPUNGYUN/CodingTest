let [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);
let set = [...new Set([...arr].sort((a,b)=>a-b))];
let map = new Map();
let res = [];
for(let i=0; i<set.length; i++){
    map.set(set[i], i);
}
for(let i=0; i<n; i++){
    res.push(map.get(arr[i]));
}
console.log(res.join(' ').trim());