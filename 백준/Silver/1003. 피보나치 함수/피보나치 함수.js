let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
 
function fibonacci(n) {
  let data = {
    zero: [1, 0],
    one: [0,1]
  }
 
  if (n <= 1) {
    return data  
  }
 
  for (let i = 2; i < n+1; i++) {
    data.zero.push(data.zero[i-1] + data.zero[i-2])
    data.one.push(data.one[i-1] + data.one[i-2])
  }
 
  return data
}

let res = fibonacci(40)
 
for(let i = 0; i < n; i++) {
  num = input[i]
  console.log(`${res.zero[num]} ${res.one[num]}`)
}
