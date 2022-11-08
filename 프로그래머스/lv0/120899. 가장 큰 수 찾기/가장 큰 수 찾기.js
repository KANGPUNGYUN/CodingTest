function solution(array) {
    let num = [...array].sort(function(a,b) {return b-a})[0];
    let idx = array.indexOf(num)
    return [num, idx];
}