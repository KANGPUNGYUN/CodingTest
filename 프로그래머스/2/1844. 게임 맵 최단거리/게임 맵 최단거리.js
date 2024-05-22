function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    
    const queue = [[0, 0, 1]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;
    
    while(queue.length > 0){
        const [x, y, res] = queue.shift();
        
        if(x === n-1 && y === m-1){
            return res
        }
        
        for(const [dx, dy] of directions){
            const nx = x + dx
            const ny = y + dy
            
            if(nx < n && ny < m && nx >= 0 && ny >= 0 && !visited[nx][ny] && maps[nx][ny] === 1){
                visited[nx][ny] = true;
                queue.push([nx, ny, res+1])
            }    
        }
    }
    
    return -1
}