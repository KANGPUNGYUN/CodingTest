function solution(citations) {
    const orderedCitations = citations.sort((a,b)=>b-a);
    let result = 0;
    

    for(let i=0; i<citations.length; i++){
        if(orderedCitations[i] >= i+1){
            result += 1
        }else{
            break
        }
    }
    
    return result
    
}