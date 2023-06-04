let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = input[1].split(' ').map(i=>parseInt(i));
let b = input[2].split(' ').map(i=>parseInt(i));

a.sort((x,y)=>x-y);
b.sort((x,y)=>y-x);

let sum = 0;
for(let i=0; i<a.length; i++){
    sum += a[i]*b[i];
}
console.log(sum)