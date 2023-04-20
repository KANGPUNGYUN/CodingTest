function solution(num_list) {
    if(num_list.length >= 11){
        let res = 0;
        for(let i = 0; i<num_list.length; i++){
            res += num_list[i];
        }
        return res;
    }else{
        let res = 1;
        for(let i = 0; i<num_list.length; i++){
            res *= num_list[i];
        }
        return res;
    }
}