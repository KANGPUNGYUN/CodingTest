let input = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

let startNum = 666;

while(true){ 
    if(startNum.toString().includes('666')){
        input--;
        if(input===0)
            break;
    }
    startNum++;  
}

console.log(startNum);