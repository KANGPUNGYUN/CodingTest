let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
for(let i=0; i<input.length; i++){
    let arr = input[i].split(' ').map(i=>Number(i));
    arr.sort((a,b)=>b-a);
    if(arr[0]*arr[0]===arr[1]*arr[1]+arr[2]*arr[2]){
        console.log('right')
    }else{
        console.log('wrong')
    }
}