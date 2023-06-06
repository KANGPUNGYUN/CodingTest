let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>parseInt(i));
if(input[0]==input[1]){
    console.log('==')
}else if(input[0]>input[1]){
    console.log('>')
}else{
    console.log('<')
}