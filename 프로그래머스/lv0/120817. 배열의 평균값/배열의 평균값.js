function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i];
    }
    answer = parseFloat((answer/numbers.length), 1)
    return answer;
}