function div(n){
    if(n%2 === 0){
        return div(n/2);
    }
    if(n%5 === 0){
        return div(n/5);
    }
    if(n===1){
        return 1
    }else{
        return 2
    }
}

let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

function solution(a, b) {
    if(getGCD(a,b)>1){
        return div(b/getGCD(a,b));
    }
    return div(b);
}