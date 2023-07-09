let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input.shift().split(' ').map(i=>Number(i));
let lines = input.map(i=>Number(i)).sort((a,b)=>a-b);
let low = 1;
let high = Math.max(...lines);

while(low<=high){
    let mid = parseInt((high+low)/2);
    let count = lines.map(v=>Math.floor(v/mid)).reduce((acc,cur)=> acc+cur, 0);
    if(count >= k){
        low = mid + 1
    }else{
        high = mid - 1
    }
}
console.log(high)