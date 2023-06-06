let input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let count = Array(26).fill(0);

for(let i=0; i<input.length; i++){
    for(let j=0; j<count.length; j++){
        if(input[i]===alphabet[j]){
            count[j] += 1
        }
    }
}

if([...count].sort((a,b)=>b-a)[0]===[...count].sort((a,b)=>b-a)[1]){
    console.log('?')
}else{
    console.log(alphabet[count.indexOf([...count].sort((a,b)=>b-a)[0])])
}