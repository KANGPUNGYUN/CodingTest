function solution(k, score) {
    let res = [];
    let stk = [];
    for(let i=0; i<score.length; i++){
        if(stk.length<k){
            stk.push(score[i])
            res.push(stk.sort((a,b)=>a-b)[0])
        }else{
            if(stk.sort((a,b)=>a-b)[0]>score[i]){
                res.push(stk.sort((a,b)=>a-b)[0])
            }else{
                stk.splice(stk.indexOf(stk.sort((a,b)=>a-b)[0]), 1)
                stk.push(score[i])
                res.push(stk.sort((a,b)=>a-b)[0])
            }
        }
    }
    return res
}