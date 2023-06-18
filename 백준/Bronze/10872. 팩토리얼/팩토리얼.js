let num = Number(require('fs').readFileSync('/dev/stdin'));
let res = 1
for(let i=2; i<=num; i++){
    res *= i
}
console.log(res)