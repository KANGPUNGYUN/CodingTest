let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
let arr = input.map(v=>v.split(' ').map(Number));

function fn(n, list){

    list.sort(function(a, b) { 
    
        if(a[1] === b[1]){
            return a[0] - b[0]
        }
        else{
            return a[1] - b[1];
        }
    })
    
    let count = 1;
    let tmp = list[0][1];

    for(let i=1; i<n; i++){
        if(tmp <= list[i][0]){
            tmp = list[i][1];
            count += 1;
        }
    }
    console.log(count);
}

fn(n, arr);