let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let mapX = new Map();
let mapY = new Map();
for(let i=0; i<3; i++){
    let [x, y] = input[i].split(' ').map(Number);
    mapX.has(x)?mapX.set(x, mapX.get(x)+1):mapX.set(x, 1)
    mapY.has(y)?mapY.set(y, mapY.get(y)+1):mapY.set(y, 1)
}
let x = [...mapX].filter((v)=>v[1]===1)[0][0];
let y = [...mapY].filter((v)=>v[1]===1)[0][0];
console.log(`${x} ${y}`);