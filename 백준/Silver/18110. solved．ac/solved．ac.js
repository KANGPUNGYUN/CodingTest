let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let num = input.shift();
if(num===0){
    console.log(0)
}else{
    let remove = Math.round(num*0.15);

    let arr = input.sort((a,b)=>a-b);
    let removedArr = arr.slice(remove, num-remove);

    let res = Math.round(removedArr.reduce((acc,cur)=>acc+cur,0)/(num-2*remove))
    console.log(res);
}