let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(Number);
let map = new Map();
let res = [];
for(let i=0; i<N; i++){
    let [web, password] = input[i].split(' ');
    map.set(web, password)
}
let Q = input.slice(N);
Q.forEach(v=>{res.push(map.get(v))});
console.log(res.join('\n'));