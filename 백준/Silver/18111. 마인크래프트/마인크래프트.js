let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, b] = input.shift().split(" ").map(Number);
const arr = input.map(i => i.split(" ").map(Number));

let time = Infinity;
let height = -1;

for (let h = 0; h <= 256; h++) {
  let items = 0;
  let remove = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let cur = arr[i][j] - h;
      if (cur < 0) items -= cur;
      else remove += cur;
    }
  }

  if (remove + b >= items) {
    let t = 2 * remove + items;
    if (time >= t) {
      time = t;
      height = h;
    }
  }
}

console.log(time, height);