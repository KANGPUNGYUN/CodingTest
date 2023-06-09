let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [...new Set(input)]
arr.sort();
arr.sort((a,b)=>a.length-b.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}