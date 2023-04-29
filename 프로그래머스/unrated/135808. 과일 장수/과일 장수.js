function solution(k, m, score) {
    let res = 0;
    let arr = score.sort((a,b)=>b-a);
    for(let i=0; i<Math.floor(score.length/m); i++){
        res += arr[m*i+m-1]*m;
    }
    return res; 
}