let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M, V] = input.shift().split(' ').map(Number);

let graph = new Array(N + 1).fill(0, 0, N + 1);

for (let i = 0; i <= N + 1; i++) {
  graph[i] = new Array(N + 1).fill(0, 0, N + 1);
}

for (let i = 0; i < M; i++) {
  let [x, y] = input.shift().split(' ').map(Number);

  graph[x][y] = 1;
  graph[y][x] = 1;
}

function BFS(node){
  let answer = '';
  let visited = new Array(N + 1).fill(false, 0, N + 1);
  visited[node] = true;  

  let Queue = [];
  Queue.push(node);

  while (Queue.length > 0) {
    let cur = Number(Queue.shift());
    answer += cur + ' ';
    for (let next = 1; next <= N; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        Queue.push(next);
      }
    }
  }
  console.log(answer);
}

function DFS(node){
  let answer = '';
  let visited = new Array(N + 1).fill(false, 0, N + 1);
  let stack = [];

  stack.push(node);

  while (stack.length > 0) {
    let cur = stack.pop();

    if (!visited[cur]) {
      visited[cur] = true;
      answer += cur + ' ';

      for (let next = N; next >= 1; next--) {
        if (!visited[next] && graph[cur][next])
          stack.push(next);
      }

    }
  }
  console.log(answer);
}

DFS(V);
BFS(V);