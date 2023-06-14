let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let arr = [];
for(let i=0; i<num; i++){
    if(input[i]!==0){
        arr.push(input[i]);
    }else{
        arr.pop()
    }
}
console.log(arr.reduce((acc,cur)=>acc+cur, 0))