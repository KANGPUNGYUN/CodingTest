let input = Number(require('fs').readFileSync('/dev/stdin'));
let dp = [1,2];
for(let i=2; i<input; i++){
    dp[i]= (dp[i-1]+dp[i-2])%10007;
}
console.log(dp[input-1])