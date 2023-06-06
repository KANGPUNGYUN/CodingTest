let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<num; i++){
    const [repeat, str]= input[i].split(' ');
    let res = ''
    for(let j=0; j<str.length; j++){
        for(let k=0; k<parseInt(repeat); k++){
            res += str[j]
        }
    }
    console.log(res)
}