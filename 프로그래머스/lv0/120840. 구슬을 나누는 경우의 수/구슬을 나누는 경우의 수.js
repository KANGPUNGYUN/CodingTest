function solution(balls, share) {
    
    function fac(x){
        let res = 1
        for(let i=1; i<=x; i++){
            res = res * i;
        }
        return res
    }
    let diff = balls-share;
    
    return diff === 0 ? 1 : Math.round(fac(balls)/(fac(diff)*fac(share)));
}