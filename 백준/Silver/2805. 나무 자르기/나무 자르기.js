let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(Number);
let arr = input.shift().split(' ').map(Number).sort((a,b)=>a-b);
let max = Math.max(...arr);

function fn(arr, M){
    let res = 0;
    let min = 0;
    while(min<=max){
        let total = 0;
        let mid = parseInt((min+max)/2);
        for(let x of arr){
            if(x>mid){
                total += x-mid
            }
        }
        if (total >= M){
            if(mid > res){res = mid}
            min = mid + 1;
        }else{
            max = mid - 1;
        }
    }
    console.log(res)
}

fn(arr, M)