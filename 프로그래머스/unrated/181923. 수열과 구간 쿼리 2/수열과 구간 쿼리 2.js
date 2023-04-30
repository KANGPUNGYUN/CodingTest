function solution(arr, queries) {
    let answer = [];
    for(let i = 0; i<queries.length; i++){
        let res = []
        for(let j = queries[i][0]; j<queries[i][1]+1; j++){
            if(arr[j]>queries[i][2]){
                res.push(arr[j]);
            }
        }
        if(res.sort((a,b)=>a-b)[0]){
            answer.push(res.sort((a,b)=>a-b)[0]);
        }else{
            answer.push(-1);
        }
    }
    return answer
}