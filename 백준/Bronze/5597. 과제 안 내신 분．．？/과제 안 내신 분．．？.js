let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(i=>Number(i));
let arr = [];
for (let i = 1; i <= 30; i++) {
	if (!input.includes(i)) arr.push(i);
	if (arr.length === 2) break;
}
console.log(arr.join("\n"));