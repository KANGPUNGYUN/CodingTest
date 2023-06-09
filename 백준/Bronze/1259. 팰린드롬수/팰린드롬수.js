let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

for(let i=0; i<input.length; i++){
    let res = "yes"
    while(input[i].length>1){
        if(input[i][0]===input[i][input[i].length-1]){
            input[i] = input[i].slice(1, input[i].length-1)
        }else{
            res = "no"
            break
        }
    }
    console.log(res)
}