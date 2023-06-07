const input = require('fs').readFileSync('/dev/stdin')
const num = Number(input);

let res = ''

for(let i=1;i<=num;i++){
    res += `${i}\n`
}

console.log(res)