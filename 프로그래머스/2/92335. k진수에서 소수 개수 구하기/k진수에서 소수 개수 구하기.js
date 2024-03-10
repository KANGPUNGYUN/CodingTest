function solution(n, k) {
    let res = 0;
    n = n.toString(k).split("0").map(Number);
    
    for(let i=0; i<n.length; i++) {
        if(n[i] !== 0 && n[i] !== 1) {
            if(isPrime(n[i])){
                res += 1;
            }
        }
    }

    return res;
}

function isPrime(num) {
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i == 0) return false;
    }

    return true;
}