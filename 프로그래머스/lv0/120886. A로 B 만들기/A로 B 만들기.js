function solution(before, after) {
    let bef = before.split("").sort();
    let aft = after.split("").sort();
    for(let i in bef){
        if(bef[i] !== aft[i]){
            return 0
        }
    }
    return 1
}