function gcdFunc(a, b) {
    if (b === 0) return a;

    return gcdFunc(b, a % b);
}

function solution(n, m) {
    let a = Math.max(n,m);
    let b = Math.min(n,m);
    
    let gcd = gcdFunc(a, b);
    
    let lcm = n*m/gcd
    
    return [gcd, lcm];
}