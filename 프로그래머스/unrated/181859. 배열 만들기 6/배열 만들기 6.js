function solution(arr) {
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(res.length === 0){
            res.push(arr[i]);
            continue
        }
        if(res[res.length-1] === arr[i]){
            res.pop();
            continue
        }else{
            res.push(arr[i]);
            continue
        }
    }
    return res.length?res:[-1];
}