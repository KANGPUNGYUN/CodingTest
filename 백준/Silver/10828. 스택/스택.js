let [num, ...run] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let stack = [];
let res = [];

for(let i=0; i<num; i++){
    if(run[i]==='pop'){
        stack.length === 0 ? res.push(-1) : res.push(stack[stack.length-1]);
        stack.pop();
    }else if(run[i]==='size'){
        res.push(stack.length);
    }else if(run[i]==='empty'){
        stack.length === 0 ? res.push(1) : res.push(0);
    }else if(run[i]==='top'){
        stack.length === 0 ? res.push(-1) : res.push(stack[stack.length-1]);
    }else{
        stack.push(Number(run[i].split(' ')[1]))
    }
}
console.log(res.join('\n'));