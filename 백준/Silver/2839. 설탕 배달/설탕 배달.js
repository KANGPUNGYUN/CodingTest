let num = Number(require('fs').readFileSync('/dev/stdin'));
let count = 0;

while (true) {
  if (num % 5 === 0) {
    console.log(num/5 + count);
    break;
  }
    
  if (0 > num) {
    console.log(-1);
    break;
  }

  count++;
  num -= 3;
}