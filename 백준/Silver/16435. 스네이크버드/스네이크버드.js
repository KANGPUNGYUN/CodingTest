let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, l] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

for(let i=0; i<n; i++){
    if(l>=arr[i]){
        l++
    }else{
        break
    }
}

console.log(l)