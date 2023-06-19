let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = [];
for(let i=0; i<num; i++){
    let [a, b] = input[i].split(' ').map(i=>Number(i));
    res.push(a+b);
}
console.log(res.join('\n'));