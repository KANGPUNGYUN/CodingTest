let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'));
let A=0;
let B=0;
let C=0;

if(input>=300){
    A = Math.floor(input/300);
    input = input%300;
}
if(input>=60 && input<300){
    B = Math.floor(input/60);
    input = input%60
}
if(input>=10 && input<60){
    C = Math.floor(input/10);
    input = input%10
}
if(input!==0){
    console.log(-1);
}else{
    console.log(`${A} ${B} ${C}`)
}