let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let a = input.split('-');
for(let i=0; i<a.length; i++){
    if(a[i].includes('+')){
        a[i] = a[i].split('+').map(Number).reduce((acc,cur)=>acc+cur,0);
    }else{
        a[i] = Number(a[i])
    }
}
let res = a.reduce((acc,cur)=>acc-cur, a[0]*2);
console.log(res)