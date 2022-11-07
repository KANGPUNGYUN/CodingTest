function solution(denum1, num1, denum2, num2) {
    const gcd = (a, b) => {
        if (b === 0) return a; // 나누어지면 a 리턴
        return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
    };
    
    let z = gcd(denum1*num2+denum2*num1, num1*num2);
    console.log(z);
    
    return [(denum1*num2+denum2*num1)/z, num1*num2/z];
}