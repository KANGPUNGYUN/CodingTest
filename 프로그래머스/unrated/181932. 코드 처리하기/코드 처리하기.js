function solution(code) {
    let mode = 0;
    let res = '';
    for(let i=0; i<code.length; i++){
        if(code[i]==="1" && mode === 0){
            mode = 1
        }
        else if(code[i]==="1" && mode === 1){
            mode = 0
        }
        if(mode === 0 && i%2===0 && code[i]!=="1"){
            res+=code[i]
        }
        if(mode === 1 && i%2===1 && code[i]!=="1"){
            res+=code[i]
        }
    }
    if(res === ''){
        return "EMPTY"
    }
    return res;
}