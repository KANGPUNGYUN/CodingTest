let [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i));
let arr = new Array(n).fill(1).map((v,i)=>v+i);
let answer = [];
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }
  
 console.log('<'+answer.join(', ')+'>')