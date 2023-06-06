let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    let answer = input[i].split(' ').map(i=>Number(i));
    console.log(answer[0]+answer[1]);
}