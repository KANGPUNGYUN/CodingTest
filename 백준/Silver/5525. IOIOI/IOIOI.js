let [N, M, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let P = 'I'+'OI'.repeat(Number(N));
let count = 0;
let pos = str.indexOf(P);
while(pos !== -1){
    count++;
    pos = str.indexOf(P, pos + 1);
}
console.log(count)