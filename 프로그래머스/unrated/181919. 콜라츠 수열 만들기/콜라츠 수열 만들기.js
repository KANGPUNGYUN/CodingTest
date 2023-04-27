function solution(n) {
    return fn(n);
}

let arr = [];

function fn(n){
    if(n===1){
        return [...new Set(arr)]
    }
    arr.push(n)
    if(n%2 === 0){
        arr.push(n/2);
        return fn(n/2);
    }else{
        arr.push(3*n+1);
        return fn(3*n+1);
    }
}