let [num, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let str = input.split('');
let hash = new Map();
hash.set('a',1);
hash.set('b',2);
hash.set('c',3);
hash.set('d',4);
hash.set('e',5);
hash.set('f',6);
hash.set('g',7);
hash.set('h',8);
hash.set('i',9);
hash.set('j',10);
hash.set('k',11);
hash.set('l',12);
hash.set('m',13);
hash.set('n',14);
hash.set('o',15);
hash.set('p',16);
hash.set('q',17);
hash.set('r',18);
hash.set('s',19);
hash.set('t',20);
hash.set('u',21);
hash.set('v',22);
hash.set('w',23);
hash.set('x',24);
hash.set('y',25);
hash.set('z',26);
let index = 1;
let res = 0;
for(let i=0; i<Number(num); i++){
    res += hash.get(str[i])*index;
    index *= 31
}
console.log(res%1234567891)