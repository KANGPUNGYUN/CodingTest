let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let p1 = input[0].split(' ').map(Number);
let p2 = input[1].split(' ').map(Number);
let p3 = input[2].split(' ').map(Number);

let r1 = p1[0]*p2[1]+p2[0]*p3[1]+p3[0]*p1[1]
let r2 = p2[0]*p1[1]+p3[0]*p2[1]+p1[0]*p3[1]

if(r1>r2){
    console.log(1)
}else if(r1<r2){
    console.log(-1)
}else{
    console.log(0)
}