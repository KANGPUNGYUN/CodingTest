function solution(common) {
    let temp = common[1] - common[0];
    let temp2 = common[2] - common[1];
    
        if(common[common.length-1] - common[common.length-2] !== temp){
            return common[common.length-1]*(temp2/temp);
        }else{
            return common[common.length-1]+temp;
        }
}