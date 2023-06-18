let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
let i = a;
let j = b;

while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)