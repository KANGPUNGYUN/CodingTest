function solution(my_string, num1, num2) {
    const one = my_string[num1];
    const two = my_string[num2];
    
    let arr = my_string.split("");
    
    for(let i = 0; i < arr.length; i++){
        if(i === num1){
            arr[i] = two
        } else if(i === num2){
            arr[i] = one
        }
    }

    return arr.join("");
}