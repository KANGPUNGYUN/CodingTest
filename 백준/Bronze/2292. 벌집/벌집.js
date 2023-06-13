let num = Number(require('fs').readFileSync('/dev/stdin'));
if(num === 1){
    console.log(1)
}else{
    let i = 1
    while(num>1){
        num = num - (6*i)
        i++
    }
    console.log(i)
}