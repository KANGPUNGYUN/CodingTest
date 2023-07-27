let input = Number(require('fs').readFileSync('/dev/stdin'));
let dp = new Array(input+1).fill(0);
dp[1] = 1;
for(let i=2; i<=input; i++){
    let min = 5;
    for(let j=1; j*j<=i; j++){
        min = Math.min(min, dp[i-j*j])
    }
    dp[i] = min + 1;
}
console.log(dp[input])