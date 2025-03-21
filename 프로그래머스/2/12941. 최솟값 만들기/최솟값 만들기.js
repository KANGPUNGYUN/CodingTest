function solution(A,B){
    let res = 0;
    let a = A.sort((a,b)=>b-a);
    let b = B.sort((a,b)=>a-b);
    
    for(let i=0;i<A.length; i++){
        res += a[i]*b[i]
    }
    
    return res
}