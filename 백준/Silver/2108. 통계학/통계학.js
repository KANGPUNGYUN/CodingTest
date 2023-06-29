let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let sum = 0;
for(let i=0; i<num; i++){
    sum += input[i]
}
console.log(Math.round(sum/num)===-0?0:Math.round(sum/num))
let asc = input.sort((a,b)=>a-b);
console.log(asc[(num-1)/2]);
let range = asc[num-1] - asc[0];
function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 ? m[0][0] : m[0][1] === m[1][1] ? m[1][0] : m[0][0];
}
console.log(solution(asc));
console.log(range);