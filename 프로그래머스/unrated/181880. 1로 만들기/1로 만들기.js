function fn(sum, n){
    if(n===1){
        return sum
    }
    if(n%2===1){
        sum++
        return fn(sum, (n-1)/2)
    }else{
        sum++
        return fn(sum, n/2)
    }
}

function solution(num_list) {
    let res = 0;
    for(let i=0; i<num_list.length; i++){
        res += fn(0, num_list[i])
    }
    return res
}