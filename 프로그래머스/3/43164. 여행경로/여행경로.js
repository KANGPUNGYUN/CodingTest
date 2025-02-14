function solution(tickets) {
    tickets.sort();
    
    // 방문 여부
    let visited = Array(tickets.length).fill(false)
    
    // 결과
    let res = []
    
    function dfs(start, path){
        // 탈출 조건
        if(path.length === tickets.length + 1){
            res.push([...path]);
            return true;
        }
        
        // 반복 조건
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === start) {
                visited[i] = true;
                path.push(tickets[i][1]);
                
                if (dfs(tickets[i][1], path)) return true;
                
                // 백트래킹
                visited[i] = false;
                path.pop();
            }
        }
        
        return false
    }
    
    dfs("ICN", ["ICN"])
    
    return res[0]
}