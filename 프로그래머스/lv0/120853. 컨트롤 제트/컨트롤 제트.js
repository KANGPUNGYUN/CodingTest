function solution(s) {
    var answer = 0;
    let list = s.split(" ");
    
    for(let i = 0; i < list.length; i++){
        
        if(list[i] === "Z"){
            answer -= parseInt(list[i-1]);
        }else{
            answer += parseInt(list[i]);
        }
        
    }
    
    return answer;
}