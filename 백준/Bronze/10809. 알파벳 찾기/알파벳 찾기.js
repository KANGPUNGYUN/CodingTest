let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let str = 'abcdefghijklmnopqrstuvwxyz';
let res = Array(26).fill(-1)
for(let i=0; i<input.length; i++){
    for(let j=0; j<str.length; j++){
        if(input[i]===str[j]){
            res[j]=input.indexOf(str[j])
        }
    }
}
console.log(res.join(' '))
