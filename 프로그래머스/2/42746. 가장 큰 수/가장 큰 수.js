function solution(numbers) {
    let sorted = numbers.map(i=>i.toString()).sort((a, b) => {
            return (b + a) - (a + b);
        });
    
    if (sorted[0] === '0') {
        return '0';
    }
    
    return sorted.join("")
}