const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const data = input.map(v => v.split(' ').map(Number));

const getGCD = (a, b) => {
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let remainder;
  while (y) {
    remainder = x % y;
    x = y;
    y = remainder;
  }
  return x;
};

const output = data.map(([M, N, x, y]) => {
  const lcm = M * N / getGCD(M, N);
  let year;
  for (let i = x; i <= lcm; i += M) {
    if ((i - 1) % N + 1 === y) {
      year = i;
      break;
    }
  }
  return year ? year : -1;
});

console.log(output.join('\n'));