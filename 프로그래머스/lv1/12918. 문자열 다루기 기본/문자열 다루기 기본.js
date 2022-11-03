function solution(s) {
    var answer = true;
    let arr = s.match(/[a-zA-Z]/g);
    
    if(s.length !== 4 && s.length !== 6){
        answer = false;
    }
    
    if(arr !== null){
        answer = false;
    }
        
    return answer;
}