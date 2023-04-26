function solution(num_str) {
    let arr = num_str.split("");
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += parseInt(arr[i]);
    }
    return sum
}