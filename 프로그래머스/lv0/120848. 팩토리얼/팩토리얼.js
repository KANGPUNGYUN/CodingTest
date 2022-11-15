function solution(n) {
    let fac = 1;
    for(let i = 1; i <= 10; i++){
        fac = fac*i
        if(parseInt(n/fac) === 1){
            return i;
        }else if(parseInt(n/fac)<1){
            return i-1;
        }
    }
}