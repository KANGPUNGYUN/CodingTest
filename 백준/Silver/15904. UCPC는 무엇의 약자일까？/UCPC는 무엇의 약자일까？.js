let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = input.split('').filter((v)=>v===v.toUpperCase() && v!==' ').join('')
let x1 = arr.indexOf('U');
let x2 = arr.indexOf('C', x1);
let x3 = arr.indexOf('P', x2);
let x4 = arr.indexOf('C', x3);
if(x1>=0 && x2>x1 && x3>x2 && x4>x3){
    console.log('I love UCPC')
}else{
    console.log('I hate UCPC')
}