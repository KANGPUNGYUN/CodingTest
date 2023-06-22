let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input.shift();
let arr = input.map(v =>v.split(' ').map(val => parseInt(val)));

let res = '';
arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach(val => {
    res += `${val[0]} ${val[1]}\n`;
  });

console.log(res);