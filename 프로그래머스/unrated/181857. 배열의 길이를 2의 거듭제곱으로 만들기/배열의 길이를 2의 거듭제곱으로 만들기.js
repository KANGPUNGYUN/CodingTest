function solution(arr) {
    let res = [];
    let n = 1;
    while(n<arr.length){
        n *= 2;
    }
    for(let i = 0; i<n; i++){
        if(arr[i] === undefined){
            res.push(0);
        }else{
            res.push(arr[i]);
        }
    }
    return res
}