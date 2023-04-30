function solution(arr, flag) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(flag[i]){
            for(let j=0;j<arr[i]*2;j++){
                res.push(arr[i]);

            }
        }else{
            for(let j=0;j<arr[i];j++){
                res.pop(arr[i])
            }
        }
    }
    return res
}