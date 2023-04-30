function solution(arr, queries) {
    for(let i=0;i<queries.length;i++){
        for(let j=0;j<arr.length;j++){
            if(queries[i][0]<=j&& j<=queries[i][1] && j%queries[i][2]===0){
                arr[j] = arr[j]+1
            }
        }
    }
    return arr
}