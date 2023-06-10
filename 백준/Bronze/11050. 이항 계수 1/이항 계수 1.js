let [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
function factorial(num){
    let res = 1
    for(let i=2; i<=num; i++){
        res *= i
    }
    return res
}
console.log(factorial(n)/(factorial(k)*factorial(n-k)))