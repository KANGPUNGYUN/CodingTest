function solution(n, k) {
    let res = 0;
    let changedNumber = n.toString(k);
    let arr = changedNumber.split("0").filter(i => i!=="1" && i!=="" );
    for(let i = 0; i<arr.length; i++){
        res += isPrime(Number(arr[i]))
    }
    return res
}

function isPrime(num) {
    if(num < 2){
        return 0
    }
    
    if(num === 2){
        return 1
    }
    
    let sqrt = Math.sqrt(num)
    
    for(let i=2; i<=sqrt; i++){
        if(num % i === 0){
            return 0
        }
    }
    
    return 1
}