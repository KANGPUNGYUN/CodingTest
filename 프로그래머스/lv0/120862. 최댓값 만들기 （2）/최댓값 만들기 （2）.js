function solution(numbers) {
    let answer = numbers.sort(function(a,b) {return a-b})
    if(answer[0]*answer[1] > answer[answer.length-2]*answer[answer.length-1]){
        return answer[0]*answer[1]
    } else {
        return answer[answer.length-2]*answer[answer.length-1];
    }
}