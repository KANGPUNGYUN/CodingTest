
function solution(n) {
    const remain = 1234567;
    
    let prev = 0;
    let cur = 1;
    
    for(let i=2; i<=n; i++){
        let next = (prev + cur) % 1234567;
        prev = cur;
        cur = next;
    }
    
    return cur
}