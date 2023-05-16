const input = require('fs').readFileSync('/dev/stdin').toString().trim();

for(let i=0; i<Math.floor(input.length/2); i++){
    if(input[i]===input[input.length-(i+1)]){
        continue
    }else{
        console.log(0)
        return;
    }
}
console.log(1)
return;