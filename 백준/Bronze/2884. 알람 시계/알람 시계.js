let [hour, minute]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(i=>Number(i))
if(45<=minute){
    console.log(hour, minute-45)
}else if(1<=hour){
    console.log(hour-1, minute+15)
}else{
    console.log(23, minute+15)
}