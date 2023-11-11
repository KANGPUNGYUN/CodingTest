function solution(arr) {
    arr.sort((a,b)=>b-a)
    let answer = false;
    let divided = false;
    let count = arr[0];
    
    while(!divided){
        divided = arr.every((number)=>count%number === 0)
        if(divided){
            answer = count;
            break
        }
        count++
    }
    return answer
}