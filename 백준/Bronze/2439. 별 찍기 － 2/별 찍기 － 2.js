let num = parseInt(require('fs').readFileSync('/dev/stdin'))

for (let i = 0; i < num; i++) {
  let star = '';
    
  for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}