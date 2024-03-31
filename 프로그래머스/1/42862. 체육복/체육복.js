function solution(n, lost, reserve) {
    [lost, reserve] = [lost.filter(v=>!reserve.includes(v)).sort((a,b)=>a-b), reserve.filter(v=>!lost.includes(v)).sort((a,b)=>a-b)]
    let res = n - lost.length
    
    for(let i=0; i<lost.length; i++){
        if(reserve.includes(lost[i]-1)){
            res++
            reserve = reserve.filter(v=>v!==lost[i]-1)
        }else if(reserve.includes(lost[i]+1)){
            res++
            reserve = reserve.filter(v=>v!==lost[i]+1)
        }
    }

    return res
}