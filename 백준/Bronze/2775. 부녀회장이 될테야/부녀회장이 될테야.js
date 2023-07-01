let [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
for(let rep=0; rep<num; rep++){
    let floor = input.shift();
    let ho = input.shift();
    let arr = Array.from(Array(floor+1), () => Array(ho).fill(1).map((v,i)=>v+i));
    for(let i=1; i<arr.length; i++){
        for(let j=1; j<arr[i].length; j++){
            arr[i][j] = arr[i][j-1]+arr[i-1][j]
        }
    }
    console.log(arr[floor][ho-1])
}