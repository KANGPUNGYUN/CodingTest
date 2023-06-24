let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let arr = input.shift().split(" ");
let m = Number(input.shift());
let target = input.shift().split(" ");
let res = [];
//이중 반복문으로 해결 시 시간 초과
//for(let i=0; i<m; i++){
//    let count = 0;
//    for(let j=0; j<n; j++){
//        if(arr[j] === target[i]){
//            count++
//        }
//    }
//    res.push(count);
//}
let map = new Map();
for(let i=0; i<n; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i]) + 1)
    }else{
        map.set(arr[i], 1)
    }
}
for(let i=0; i<m; i++){
    if(map.has(target[i])){
        res.push(map.get(target[i]))
    }else{
        res.push(0)
    }
}
console.log(res.join(" "));