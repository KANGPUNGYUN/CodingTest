let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<num; i++){
    let cnt = 0;
    let sum = 0;
    for(let j=0; j<input[i].length; j++){
        if(input[i][j]==='O'){
            cnt++
        }else{
            cnt = 0;
        }
        sum += cnt;
    }
    console.log(sum)
}