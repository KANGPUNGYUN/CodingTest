let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = []
for(let i=0; i<Number(num); i++){
    res.push(input[i][0]+input[i][input[i].length-1])
}
console.log(res.join('\n'));