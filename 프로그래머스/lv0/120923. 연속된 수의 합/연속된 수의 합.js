function solution(num, total) {
    var answer = [];
    let rest = Math.floor(num/2);
    if(num%2===1){
        let init = total/num - rest;
        for(let i = 0; i<num; i++){
            answer.push(init+i)
        }
    }else{
        let init = (total - (num/2))/num - rest + 1;
        for(let i = 0; i<num; i++){
            answer.push(init+i)
        }
    }
    return answer;
}