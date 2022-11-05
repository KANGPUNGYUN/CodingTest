function solution(n, m) {
    
    let nList = [];
    for(let i = 1; i<n+1; i++){
        if(n%i === 0){
            nList.push(i);
        }
    }
    
    let mList = [];
    for(let i = 1; i<m+1; i++){
        if(m%i ===0){
            mList.push(i);
        }
    }
    
    let a = 1; 
    for(let i = 0; i<nList.length; i++){
        for(let j = 0; j<mList.length; j++){
            if(mList[j] === nList[i]){
                a = mList[j];
            }
        }
    }
    let b = n*m/a;
    
    var answer = [a, b];
    return answer;
    
}