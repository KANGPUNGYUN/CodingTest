function solution(numbers) {
    let sort = numbers.sort(function(a,b) {return b-a}).reverse();
    return sort[numbers.length-1]*sort[numbers.length-2]
}