function solution(my_string, n) {
    answer = [];
    let spl = my_string.split('');
    
    for(let i = 0; i < spl.length; i++){
        for(let j =0; j<n; j++){
            answer.push(spl[i]);
        }
    }
    
    
    return answer.join("");
}