let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

if(!input.includes('0')){
    console.log('-1');
}else{
    let sum = input.reduce((acc,cur)=>acc+parseInt(cur), 0);
    if(sum%3===0){
        console.log(input.sort((a,b)=>b-a).join(''));
    }else{
        console.log('-1');
    }
}