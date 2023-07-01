let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()
for(let i=0; i<input.length; i++){
    let set = input[i].split('').filter(i=>i==='('||i===')'||i==='['||i===']').join('');
    while(set.indexOf('()')!==-1 || set.indexOf('[]')!==-1){
        if(set.indexOf('()')!==-1){
            set = set.split('()').join('');
        }else if(set.indexOf('[]')!==-1){
            set = set.split('[]').join('');
        }
    }
    if(set === ''){
        console.log("yes")
    }else{
        console.log("no")
    }
}