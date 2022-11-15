function solution(numbers, direction) {
    let temp = 0;
    if(direction === "right"){ 
        temp = numbers[numbers.length-1];
        numbers.pop();
        numbers.unshift(temp);
        
    }else{
        temp = numbers[0];
        numbers.shift();
        numbers.push(temp)
    }
    
    return numbers;
}