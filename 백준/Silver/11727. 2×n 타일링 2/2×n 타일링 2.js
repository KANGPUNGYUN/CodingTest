let input = Number(require('fs').readFileSync('/dev/stdin'))
let dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 3;
for(let i=3; i<=input; i++){
    dp[i] = (dp[i-1] + 2*dp[i-2])%10007;
}
console.log(dp[input])