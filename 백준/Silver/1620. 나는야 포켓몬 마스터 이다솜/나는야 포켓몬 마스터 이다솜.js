let [nc, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, c] = nc.split(' ').map(i => Number(i));
let nTos = new Map();
let sTon = new Map();
let res = [];

for(let i=0; i<n; i++){
    nTos.set(i+1, input[i]);
    sTon.set(input[i], i+1);
}

for(let i=n; i<n+c; i++){
    isNaN(input[i])?res.push(sTon.get(input[i])):res.push(nTos.get(Number(input[i])));
}

console.log(res.join('\n'))