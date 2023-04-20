function solution(num_list) {
    let lastIndex = num_list.length-1;
    if(num_list[lastIndex] > num_list[lastIndex-1]){
        num_list.push(num_list[lastIndex]-num_list[lastIndex-1]);
        return num_list
    }else{
        num_list.push(num_list[lastIndex]*2);
        return num_list
    }

}