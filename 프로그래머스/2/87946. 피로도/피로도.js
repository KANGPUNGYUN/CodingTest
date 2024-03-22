function solution(k, dungeons) {
    let res = 0
    let visited = new Array(dungeons.length).fill(false)
    
    const DFS = (hp , count) => {
        for(let i = 0 ; i < dungeons.length ; i++) {
            if(!visited[i] && hp >= dungeons[i][0]){
                visited[i] = true
                DFS(hp - dungeons[i][1] , count + 1)
                visited[i] = false
            }    
        }
        res = Math.max(res, count)
    }
    
    DFS(k,0)
    return res
}