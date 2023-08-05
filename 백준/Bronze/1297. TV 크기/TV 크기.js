let [D,H,W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let k = D/Math.sqrt(H*H+W*W);
console.log(`${Math.floor(k*H)} ${Math.floor(k*W)}`);