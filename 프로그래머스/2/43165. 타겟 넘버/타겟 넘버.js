function solution(numbers, target) {
    let count = 0;
    function dfs(sum, time){
        if(time === numbers.length && sum === target){
            count += 1
            return
        }else if(time === numbers.length){
            return
        }
        dfs(sum+numbers[time] , time+1);
        dfs(sum-numbers[time] , time+1);
    }
    dfs(0,0);
    return count
}