function solution(arr) {
    var answer = [];
    if(arr.length === 1){
        answer = [-1];
        return answer;
    }
    let min = Math.min(...arr);
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    for(let i in arr){
        answer.push(arr[i]);
    }
    
    return answer;
}