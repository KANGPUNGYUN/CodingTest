let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));

function getResult() {
    let m = 1;
    let stack = [];
    let result = [];

    for(let i = 1; i <= parseInt(input[0]); i++) {
        if (parseInt(input[i]) > (stack[stack.length - 1] === undefined ? 0 : stack[stack.length - 1])) {
            for (let j = m; j <= parseInt(input[i]); j++) {
                stack.push(m++);
                result.push("+");
            }
        }else if(parseInt(input[i]) < stack[stack.length - 1]) {
            return "NO";
        }
        if(parseInt(input[i]) === stack[stack.length - 1]) {
            result.push("-");
            stack.pop();
        }
    }
    return result.join("\n");
}

console.log(getResult());