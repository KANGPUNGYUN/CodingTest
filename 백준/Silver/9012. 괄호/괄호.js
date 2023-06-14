let [num, ...str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0;i<num;i++){
    while(str[i].indexOf('()')!==-1){
        str[i] = str[i].split('()').join('');
    }
    str[i].length === 0 ? console.log('YES') : console.log('NO')
}