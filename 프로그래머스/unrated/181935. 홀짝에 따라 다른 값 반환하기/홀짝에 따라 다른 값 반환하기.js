function solution(n) {
    let res = 0;
    if(n%2===1){
        for(let i = 1; i<=n; i += 2){
            res += i;
        }
    }else{
        for(let i = 2; i<=n; i += 2){
            res += i*i;
        }
    }
    return res
}