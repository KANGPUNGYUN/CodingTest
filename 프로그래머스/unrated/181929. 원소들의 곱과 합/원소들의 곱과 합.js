function solution(num_list) {
    let multi = 1;
    let sum = 0;
    for(let i = 0; i<num_list.length; i++){
        multi *= num_list[i];
        sum += num_list[i];
    }
    if(multi < sum*sum){
        return 1;
    }else{
        return 0;
    }
}