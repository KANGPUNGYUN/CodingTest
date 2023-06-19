let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let map = new Map();
map.set('A+', 4.3);
map.set('A0', (4.0).toFixed(1));
map.set('A-', 3.7);
map.set('B+', 3.3);
map.set('B0', (3.0).toFixed(1));
map.set('B-', 2.7);
map.set('C+', 2.3);
map.set('C0', (2.0).toFixed(1));
map.set('C-', 1.7);
map.set('D+', 1.3);
map.set('D0', (1.0).toFixed(1));
map.set('D-', 0.7);
map.set('F', (0.0).toFixed(1));
console.log(map.get(input))