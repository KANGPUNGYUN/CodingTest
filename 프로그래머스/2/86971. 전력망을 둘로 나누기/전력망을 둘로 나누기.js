function solution(n, wires) {
    const getGraph = (wires) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        for (const [v1, v2] of wires) {
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        return graph;
    };

    const bfs = (graph, start, visited) => {
        const queue = [start];
        let count = 0;
        while (queue.length > 0) {
            const node = queue.shift();
            if (!visited[node]) {
                visited[node] = true;
                count += 1;
                for (const neighbor of graph[node]) {
                    if (!visited[neighbor]) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        return count;
    };

    let res = Infinity;

    for (let i = 0; i < wires.length; i++) {
        const remainingWires = wires.slice(0, i).concat(wires.slice(i + 1));
        const graph = getGraph(remainingWires);

        const visited = Array(n + 1).fill(false);

        const count1 = bfs(graph, wires[i][0], visited);
        const count2 = n - count1;

        res = Math.min(res, Math.abs(count1 - count2));
    }

    return res;
}