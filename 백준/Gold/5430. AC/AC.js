let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = [];
for(let i=0; i<Number(n); i++){
    let order = input[i*3].split('');
    let arr = JSON.parse(input[i*3+2]);
    let reversed = 0;
    let isError = false;
    
    for(let j of order){
        if(j==='R'){
            reversed += 1;
        }else{
            if (arr.length === 0) {
                isError = true;
                break;
            }
            if (reversed%2){
                arr.pop();
            }else{
                arr.shift();
            }
        }
    }
    if(isError){
        res.push('error')
    }else{

        if(reversed%2){
            arr = arr.reverse();
        }
        res.push('['+arr+']')
    }
}
console.log(res.join('\n'))