let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [nh, ns] = input.shift().split(' ');
let set = new Set();
let res = [];

for(let i=0; i<input.length; i++){
    set.has(input[i]) ? res.push(input[i]) : set.add(input[i])
}

res = res.sort();
console.log(`${res.length}\n${res.join('\n')}`);