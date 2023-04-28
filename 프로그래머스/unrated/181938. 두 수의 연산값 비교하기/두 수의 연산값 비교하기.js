function solution(a, b) {
    let c = ''
    c += a
    c += b
    
    let d =2*a*b

    return parseInt(c)<d?d:parseInt(c);
}