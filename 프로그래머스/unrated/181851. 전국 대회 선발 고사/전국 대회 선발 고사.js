function solution(rank, attendance) {
    let arr = [];
    for(let i=0; i<rank.length; i++){
        if(attendance[i]){
            arr.push(rank[i]);
        }
    }
    return rank.indexOf(arr.sort((a,b)=>a-b)[0])*10000 + rank.indexOf(arr.sort((a,b)=>a-b)[1])*100 + rank.indexOf(arr.sort((a,b)=>a-b)[2])
}