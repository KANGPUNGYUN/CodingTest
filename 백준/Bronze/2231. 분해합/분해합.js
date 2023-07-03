let input = Number(require('fs').readFileSync('/dev/stdin'));
let res = 0;
for(let i = 0; i < input; i++) {
    let sum = 0;
    const check = i;

    sum = check + String(check).split('').map(i=>Number(i)).reduce((acc,cur)=>acc+cur, 0);
    
    if(sum == input) {
        res = check;
        break;
    }
}

console.log(res)
