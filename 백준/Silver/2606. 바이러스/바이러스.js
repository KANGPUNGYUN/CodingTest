let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let Node = Number(input[0]);
let link = Number(input[1]);
let graph = [...new Array(Node+1)].map(()=>[]);
for(let i=0; i<link; i++){
    let [start, end] = input[i+2].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

function dfs(graph, startNode){
    let visited = [];
    let target = [];
    
    target.push(startNode);
    
    while(target.length !== 0){
        let el = target.pop();
        if(!visited.includes(el)){
            visited.push(el);
            target = [...target, ...graph[el]]
        }
    }
    return visited;
}

console.log(dfs(graph, 1).length-1)