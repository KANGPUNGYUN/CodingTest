let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
let count = 0;
for(let i=0; i<input.length-1; i++){
    if(input[i]!==input[i+1]){
        count += 1;
    }
}
console.log(parseInt((count+1)/2))