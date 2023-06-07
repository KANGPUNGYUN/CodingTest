let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, num] = input[0].split(' ').map(i=>Number(i));
let arr = input[1].split(' ').map(i=>Number(i));
let res = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]<num){
        res.push(arr[i]);
    }
}
console.log(res.join(' '))
