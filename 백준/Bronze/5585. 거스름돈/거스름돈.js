const input = Number(require("fs").readFileSync("/dev/stdin").toString());
let change = 1000 - input;
let count = 0;
const coins = [500, 100, 50, 10, 5, 1];

for (let i=0; i<coins.length; i++) {
    let rest = Math.floor(change / coins[i]);
    change -= rest * coins[i];
    count += rest;
}

console.log(count);