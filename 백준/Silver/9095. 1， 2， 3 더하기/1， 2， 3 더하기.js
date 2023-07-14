let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let dp = new Array(10).fill(0);

dp[0] = 1;
dp[1] = 2;
dp[2] = 4;

for(let i=3; i<10; i++){
    dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
}

for(let i=0; i<n; i++){
    console.log(dp[input[i]-1])
}