function solution(my_string) {
    let arr = my_string.split(" ");
    let res = parseInt(arr[0]);
    
    for(let i = 1; i<arr.length; i++){
        if(arr[i]==="+"){
            res += parseInt(arr[i+1])
        }
        if(arr[i]==="-"){
            res -= parseInt(arr[i+1])
        }        
    }
    return res;
}