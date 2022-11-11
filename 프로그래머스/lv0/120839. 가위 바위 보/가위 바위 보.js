function solution(rsp) {
    let arr = rsp.split("")
    
    for(let i in arr){
        if(arr[i] == 0){
            arr[i] = '5';
        }else if (arr[i] == 2){
            arr[i] = '0';
        }else if (arr[i] == 5){
            arr[i] = '2';
        }
    }
    
    return arr.join("")
}