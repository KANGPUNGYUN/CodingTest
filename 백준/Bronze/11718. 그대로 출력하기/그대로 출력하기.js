let str = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = [];
for(let i=0; i<str.length; i++){
    res.push(str[i]);
}
console.log(res.join('\n'));