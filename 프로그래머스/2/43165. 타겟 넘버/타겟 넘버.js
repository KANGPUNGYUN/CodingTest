function solution(numbers, target) {
    let count = 0;
    function dfs(sum, depth){
        if(depth === numbers.length){
            if(sum === target){
                count++
            }
            return
        }
        dfs(sum + numbers[depth], depth+1)
        dfs(sum - numbers[depth], depth+1)
    }
    
    dfs(0,0)
    
    return count
}