function solution(number) {
    let arr = number.split('');
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += parseInt(arr[i]);
    }
    return sum%9;
}