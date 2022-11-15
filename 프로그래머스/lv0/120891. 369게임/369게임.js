function solution(order) {
    let res = 0;
    let arr = order.toString().split("")
    for(let i of arr){
        if(i === '3'){
            res += 1;
        }else if(i === '6'){
            res += 1;
        }else if(i === '9'){
            res += 1;
        }
    }
    
    return res
}