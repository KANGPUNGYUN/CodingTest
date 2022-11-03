function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i = 0; i < signs.length; i++){
        if(signs[i] === true){
            answer += absolutes[i]
        }
        if(signs[i] === false){
            answer -= absolutes[i]
        }
    }
    
    return answer;
}