function solution(array) {

    let n = parseInt(array.length/2);

    return array.sort(function(a, b) {return b - a;})[n];
}