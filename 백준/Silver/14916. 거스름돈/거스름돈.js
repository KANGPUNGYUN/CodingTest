let coin = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let count = 0;

while(coin>0){
    if(coin%2 === 1 || coin%5 === 0){
        count++
        coin -= 5
    }else if(coin%2 === 0){
        count++
        coin -= 2
    }   
}
if(coin === 0){
    console.log(count);
}else{
    console.log(-1);
}