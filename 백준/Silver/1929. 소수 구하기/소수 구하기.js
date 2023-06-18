let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));

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

for(let i=a; i<=b; i++){
    if(!!isPrime(i)){
        console.log(i)
    }
}