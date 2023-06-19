let str = require('fs').readFileSync('/dev/stdin').toString().trim();
let res = ''
for(let i=0; i<str.length; i++){
    if(str[i]===str[i].toUpperCase()){
        res += str[i].toLowerCase();
    }else{
        res += str[i].toUpperCase();
    }
}
console.log(res)