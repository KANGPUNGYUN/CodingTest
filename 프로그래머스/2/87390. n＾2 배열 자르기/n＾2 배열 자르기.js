function solution(n, left, right) {
    let res = [];
    while(left <= right){
        res.push(Math.max(Math.floor(left/n), left%n)+1);
        left++
    }
    return res
}