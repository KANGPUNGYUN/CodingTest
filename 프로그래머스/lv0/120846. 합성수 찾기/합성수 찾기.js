function solution(n) {
    let arr = [];
    let sum = 0;
    for(let i = 4; i<=n; i++){
        arr.push(i);
    }
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i]
        let count = 0;
        for(let j = 1; j<=temp; j++){
            if(temp%j === 0){
                count += 1;
            }
        
        }
        if(count>2){
            sum +=1;
        }
    }
    return sum;
}