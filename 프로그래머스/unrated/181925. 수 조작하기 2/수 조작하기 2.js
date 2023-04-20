function solution(numLog) {
    let arr = [];
    for(let i = 1; i<numLog.length; i++){
        if(numLog[i]-numLog[i-1] === 1){
            arr.push("w");
        }
        if(numLog[i]-numLog[i-1] === -1){
            arr.push("s");
        }
        if(numLog[i]-numLog[i-1] === 10){
            arr.push("d");
        }
        if(numLog[i]-numLog[i-1] === -10){
            arr.push("a");
        }
    }
    return arr.join("");
}