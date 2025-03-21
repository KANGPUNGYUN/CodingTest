function solution(number, k) {
   let stack = [];
    let count = 0;
    
   for(let i=0; i<number.length; i++){
       let curr = number[i];
       while(stack.length > 0 && stack[stack.length - 1] < curr && count < k){
           stack.pop();
           count++
       }
       stack.push(curr)
   }
    
    while(count < k){
        stack.pop();
           count++
    }
    
    return stack.join("")
}