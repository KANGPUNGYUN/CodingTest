let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(i=>Number(i));
let arr = input[1].split(' ').map(i=>Number(i));

let res = [];
for(let i=0; i<n-2; i++){
    for(let j=i+1; j<n-1; j++){
        for(let k=j+1; k<n; k++){
            if(arr[i]+arr[j]+arr[k]===m){
                console.log(m)
                return;
            }else if(arr[i]+arr[j]+arr[k]<m){
                res.push(arr[i]+arr[j]+arr[k])
            }
        }
    }
}
console.log(res.sort((a,b)=>b-a)[0]);