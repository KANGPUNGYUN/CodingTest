function solution(arr1, arr2) {
    var answer = [];
    
    for(let i =0; i < arr1.length; i++){
        var answer2 = [];
        for(let j = 0; j < arr1[i].length; j++){
            answer2.push(arr1[i][j]+arr2[i][j]);
            
        }
        answer.push(answer2);
        
    }
    return answer;
}