const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input.shift().split(' ').map(Number);
let neverHeard = new Set();
let neverSeen = new Set();
let res = [];

for(let i=0; i<input.length; i++){
    if(i<n){
        neverHeard.add(input[i]);
    }else{
        neverSeen.add(input[i]);
    }
}
neverHeard.forEach(i=>{if(neverSeen.has(i)){res.push(i)}})
res = res.sort();
console.log(`${res.length}\n${res.join('\n')}`);