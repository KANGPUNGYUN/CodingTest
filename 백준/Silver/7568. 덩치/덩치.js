let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input.shift());

let arr = [];
for(let i=0; i < num; i++) {
    arr.push(input[i].split(' ').map(v=>Number(v)));
}


let count = 0;
let answer = '';
for(let i=0; i < num; i++) {
    count = 0;
    for(let j=0; j < num; j++) {
        if(arr[i][0] < arr[j][0]) {
            if(arr[i][1] < arr[j][1]) {
                count++;
            }
        }
    }
    answer += count+1 + ' ';
}

console.log(answer);