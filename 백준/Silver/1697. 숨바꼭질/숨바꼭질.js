let [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let visited = new Array(100001).fill(0);

function bfs(n, k){
    let graph = [];
    graph.push(n);
    visited[n] = 1;
    let cnt = 0;
    while(graph.length !== 0){
        let len = graph.length;
        for(let i=0; i<len; i++){
            let x = graph.shift();
            if(x === k){
                return cnt
            }else{
                for(let next of [x+1, x-1, x*2]){
                    if(next>=0&&next<=100000&&visited[next]===0){
                        visited[next] = 1;
                        graph.push(next);
                    }
                }
            }            
        }
        cnt++
    }
}

console.log(bfs(n,k))