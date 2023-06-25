let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let a = input[1].split(' ').map(i=>Number(i)).sort((a,b)=>a-b);
let b = input[3].split(' ').map(i=>Number(i));
let res = []
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length -1;
    let mid;
    
    while(start<=end){
        mid = parseInt((start+end)/2);
        
        if(target === arr[mid]){
            return mid
        }else{
            if(target < arr[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
    }
    
    return -1
}

for(let i = 0; i<b.length; i++){
    binarySearch(a, b[i]) !== -1 ? res.push(1) : res.push(0);
}

console.log(res.join(' '))