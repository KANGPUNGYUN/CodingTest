let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = [];
while(input.length>0){
    let idx = Number(input.shift());
    let map = new Map();
    for(let i=0; i<idx; i++){
        let cloth = input.shift().split(' ')[1];
        map.has(cloth)?map.set(cloth, map.get(cloth)+1):map.set(cloth, 1);
    }
    res.push([...map].map(i=>i[1]+1).reduce((acc,cur)=>acc*cur, 1)-1);
}
console.log(res.join('\n'));