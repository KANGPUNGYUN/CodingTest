function solution(my_string) {
    let res = []
    let arr = my_string.split(" ");
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== ""){
            res.push(arr[i]);
        }
    }
    return res
}