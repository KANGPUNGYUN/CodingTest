let [count, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.split(' ').map(i=>Number(i));

function isPrime(num){
    if(num===1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
    }
    return true
}

let res = 0;

for(let i=0; i<Number(count); i++){
    if(!!isPrime(arr[i])){
        res++
    }
}

console.log(res);