function solution(array) {
    let arr = array.join("").split("");
    let sum = 0;
    for(let i in arr){
        if(arr[i]==="7"){
            sum += 1;
        }
    }
    return sum
}