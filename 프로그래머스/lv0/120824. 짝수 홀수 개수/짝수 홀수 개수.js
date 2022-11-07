function solution(num_list) {
    
    let even = 0;
    let odd = 0;
    for(i in num_list){
        if(num_list[i] % 2 === 0){
            even += 1;
        }else{
            odd += 1;
        }
    }
    var answer = [even, odd];
    return answer;
}