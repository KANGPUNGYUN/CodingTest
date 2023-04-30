function solution(n) {
    let res = 0;
    for(let i=1; i<=n; i++){
        if(i%2===1 && n%i===0){
            res++
        }
    }
    return res
}