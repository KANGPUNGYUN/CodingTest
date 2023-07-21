let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let dp = [1,1,1,2,2];
let res = [];
let max = Math.max(...input);
for(let i=5; i<max; i++){
        dp[i] = dp[i-1] + dp[i-5];
}
for(let i=0; i<n; i++){
    res.push(dp[input[i]-1])
}
console.log(res.join('\n'));