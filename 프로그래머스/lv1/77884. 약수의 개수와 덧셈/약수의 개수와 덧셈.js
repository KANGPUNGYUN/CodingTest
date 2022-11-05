function solution(left, right) {
    var answer = 0;
    let numList = [];
    for(left; left<=right; left++){
        numList.push(left);
    }
    
    
    for(let i = 0; i < numList.length; i++){
        const num = numList[i];
        let 약수 = [];
        for(let j = 1; j < num+1; j++){
            if(num % j === 0){
                약수.push(j); 
            }

        }
        console.log(약수.length)
        if(약수.length % 2 === 0){
                answer += numList[i];
            }else{
                answer -= numList[i];
            }
        
    }
    
    return answer;
}