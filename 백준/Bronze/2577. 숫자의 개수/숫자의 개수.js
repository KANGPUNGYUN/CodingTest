let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>parseInt(i));
let num = '0123456789'
let arr = Array(10).fill(0)
let multi = (input[0]*input[1]*input[2]).toString()
for(let i=0; i<multi.length; i++){
    for(let j=0; j<num.length; j++){
        if(multi[i]===num[j]){
            arr[j] += 1
        }
    }
}
for(let j=0; j<arr.length; j++){
        console.log(arr[j])
    }