function solution(n, numlist) {
    let arr = [];
    for(let i in numlist){
        if(numlist[i]%n ===0){
            arr.push(numlist[i]);
        }
    }
    return arr
}