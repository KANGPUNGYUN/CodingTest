function solution(n) {
    var answer = 0;
    let a = n.toString(3);
    answer = parseInt(a.split('').reverse().join(''), 3);
    return answer;
}